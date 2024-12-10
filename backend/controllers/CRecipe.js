const { Op } = require("sequelize");
const db = require("../models");
const sequelize = require("sequelize");
const {
  Recipe,
  Step,
  Ingredient,
  RecipeReview,
  RecipeLike,
} = require("../models/index");

async function stepinsert(recipeID, step) {
  //step이라는 stepNo, content를 변수로 가지는 객체 배열을 넘겨 받아, 추가 성공 시 true, 실패 시 false를 반환
  try {
    const stepinsert = await step.create({
      recipeID,
      stepNo: step.stepNo,
      content: step.content,
    });

    if (stepinsert != null) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

const Recipeinsert = async (req, res) => {
  //recipe table만 완료
  const { userID, title, describe, category, level, time } = req.body;
  //step은 레시피의 단계 정보가 담겨 있는 객체 배열
  //const userID = req.session.userID;
  console.log(title);
  try {
    const RecipeCreate = await Recipe.create({
      userID,
      title,
      describe,
      category,
      level,
      time,
    });
    if (RecipeCreate != null) {
      // let stepon = true;
      // for (let i = 0; i < steps.length; i++) {
      //   stepon = stepinsert(recipeID, steps[i]);
      //   if (stepon != true) {
      //     break;
      //   }
      // }
      // if(stepon == false)
      // {
      //   console.log("")
      // }
      // else
      // {

      // }

      res.json({
        result: true,
        message: "해당 레시피 정보를 등록하였습니다.",
      });
    } else {
      res.json({
        result: false,
        message: "해당 레시피 정보를 등록할 수 없습니다.",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const Recipeupdate = async (req, res) => {
  const { userID, title, describe, category, level, time } = req.body;
  const { recipeID } = req.params;

  try {
    const recipe = await Recipe.update(
      {
        title,
        describe,
        category,
        level,
        time,
      },
      {
        where: { userID, recipeID },
      }
    );
    console.log(recipe);

    if (recipe) {
      res.send({
        result: true,
        Message: "레시피 정보를 정상적으로 수정하였습니다.",
      });
    } else {
      res.json({
        result: false,
        Message: "레시피 정보를 수정하는데 실패했습니다.",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const RecipeDelete = async (req, res) => {
  const [recipeID, userID] = req.body;
  try {
    const { recipeDelete } = await Recipe.destroy({
      where: { userID, recipeID },
    });
    if (recipeDelete != null) {
      req.json({
        result: true,
        Message: "정상적으로 해당 레시피를 삭제하였습니다.",
      });
    } else {
      req.json({
        result: false,
        Message: "해당 레시피를 삭제하는데 실패했습니다.",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const RecipefindOne = async (req, res) => {
  try {
    const { recipeID } = req.params;
    const Recipefind = await Recipe.findOne({
      where: {
        recipeID,
      },
    });
    if (Recipefind != null) {
      req.json({
        result: true,
        Message: "정상적으로 Recipe data를 찾았습니다.",
        recipe: Recipefind,
      });
    } else {
      req.json({
        result: false,
        Message: "데이터베이스에서 데이터를 찾을 수 없습니다. 죄송합니다.",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Recipeinsert, Recipeupdate, RecipeDelete, RecipefindOne };
