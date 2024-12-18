const { Op } = require("sequelize");
const db = require("../models");
const sequelize = require("sequelize");
const { DefaultRecipe } = require("../models/index");
const axios = require("axios");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processIngredient(data) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `이 데이터를 배열형식으로 정리해줘 [{ingreName, amount}, {ingreName, amount}] 형식으로, ${data} \n 이에 대한 부가설명은 달지 않아도 됨.`;
    const result = await model.generateContent(prompt);

    const cleanedString = result.response.text()
      .replace(/[\n\r]/g, '') // 줄바꿈 제거
      .replace(/\\n/g, '')    // \n 제거
      .replace(/\\'/g, "'")  // \\' 제거 (필요시)
      .replace(/```json|```/g, '');

    // JSON으로 파싱
    const jsonArray = JSON.parse(cleanedString);

    console.log(jsonArray);

    return jsonArray;
  } catch (error) {
    if (error.status === 429) {
      console.warn("API 요청 제한: 잠시 대기 후 재시도합니다.");
      await sleep(5000); // 5초 대기 후 재시도
      return processIngredient(data); // 재귀 호출로 재시도
    } else {
      console.error("API 호출 중 오류 발생:", error);
      return "오류 발생"; // 기본값 반환
    }
  }
}

function processSteps(recipe) {
  // MANUAL01 필드가 존재하는지 먼저 확인
  if (!recipe.MANUAL01) {
    // MANUAL01이 없다면 해당 레시피는 건너뛰기
    return null;
  }

  const steps = [];

  // MANUAL01부터 순차적으로 체크하며 메뉴얼 정보 추출
  for (let i = 1; i <= 20; i++) {
    const key = `MANUAL${String(i).padStart(2, '0')}`;
    if (recipe[key] && recipe[key].trim() !== "") {
      steps.push(recipe[key]);
    }
  }

  return steps.length > 0 ? steps : null; // 유효한 메뉴얼 정보가 있을 경우만 반환
}


exports.fetchDataAndSave = async (req, res) => {
  try {
    const response = await axios.get('http://openapi.foodsafetykorea.go.kr/api/b03dee38a26f4a3aa492/COOKRCP01/json/1/10');
    const recipes = response.data.COOKRCP01.row;
    if (!recipes || !Array.isArray(recipes)) {
      throw new Error('유효하지 않은 데이터');
    }

    const processedData = recipes.map((recipe) => {
      const steps = processSteps(recipe);

      if (steps) {
        return {
          id: recipe.RCP_SEQ,
          title: recipe.RCP_NM,
          img: recipe.ATT_FILE_NO_MK,
        };
      }
      return null;
    }).filter(recipe => recipe !== null)

    console.log(processedData);

    res.json({ result: true, message: "기본 레시피 불러오기 성공", data: processedData });
  } catch (error) {
    console.error(error);
    res.json({ result: false, message: "기본 레시피 불러오기 실패" });
  }
};


exports.detailAPI = async (req, res) => {
  try {
    const { id } = req.params
    const response = await axios.get('http://openapi.foodsafetykorea.go.kr/api/b03dee38a26f4a3aa492/COOKRCP01/json/1/10');
    const recipes = response.data.COOKRCP01.row;

    const recipe = recipes.filter((recipe) => {
      return recipe.RCP_SEQ === id
    });

    const ingredients = await processIngredient(recipe[0].RCP_PARTS_DTLS);
    const steps = processSteps(recipe[0]);

    const result = {
      id: id,
      title: recipe[0].RCP_NM,
      img: recipe[0].ATT_FILE_NO_MK,
      describe: `${recipe[0].INFO_ENG}kcal (탄수화물 ${recipe[0].INFO_CAR}g, 지방 ${recipe[0].INFO_FAT}g, 단백질 ${recipe[0].INFO_PRO}g)`,
      category: recipe[0].RCP_PAT2,
      ingredients: ingredients,
      steps: steps,
    }

    console.log(result);

    res.json({ result: true, message: "레시피 불러오기 성공", data: result });
  } catch (error) {
    console.error(error);
    res.json({result: false, message: "레시피 불러오기 실패"});
  }
}