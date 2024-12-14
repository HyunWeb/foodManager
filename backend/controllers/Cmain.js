const { Op } = require("sequelize");
const db = require("../models");
const sequelize = require("sequelize");
const {DefaultRecipe} = require("../models/index");
const axios = require("axios");


// exports.get_index = async (req, res) => {
//   res.send("hello");
// };

exports.fetchDataAndSave = async (req, res) => {
  try {
    const response = await axios.get('http://openapi.foodsafetykorea.go.kr/api/b03dee38a26f4a3aa492/COOKRCP01/json/1/10');
    const recipes = response.data.COOKRCP01.row;
    if (!recipes || !Array.isArray(recipes)) {
      throw new Error('유효하지 않은 데이터');
    }

    const transformedData = recipes.map(recipe => {

      const steps = Object.keys(recipe)
        .filter(key => key.startsWith('MANUAL') && !key.includes('IMG') && recipe[key] !== '') // MANUAL로 시작하고 IMG를 포함하지 않으며 빈 문자열이 아닌 필드만
        .map(key => recipe[key]);

      return {
        title: recipe.RCP_NM,
        img: recipe.ATT_FILE_NO_MK,
        describe: `나트륨 ${recipe.INFO_NA}g, 지방 ${recipe.INFO_FAT}g, 단백질 ${recipe.INFO_PRO}g`,
        category: recipe.RCP_PAT2,
        ingredients: recipe.RCP_PARTS_DTLS,
        steps: steps,
      }
    });

    console.log(transformedData);

    await DefaultRecipe.bulkCreate(transformedData);

    res.json({result: true, message: "기본 레시피 불러오기 성공"});
  } catch (error) {
    console.error(error);
    res.json({result: false, message: "기본 레시피 불러오기 실패"});
  }
};
