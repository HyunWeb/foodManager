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
    console.log(step);
    for (let i = 0; i < step.length; i++) {
      const stepinsert = await Step.create({
        recipeID,
        stepNo: step[i].stepNo,
        content: step[i].content,
      });
      if (stepinsert != null) {
        console.log("레시피 등록 성공");
      } else {
        return false;
      }
    }

    return true;
  } catch (error) {
    return false;
  }
}
async function ingredientinsert(recipeID, Ingredients) {
  //step이라는 stepNo, content를 변수로 가지는 객체 배열을 넘겨 받아, 추가 성공 시 true, 실패 시 false를 반환
  try {
    console.log(Ingredients);
    for (let i = 0; i < Ingredients.length; i++) {
      const Ingredinentinsert = await Ingredient.create({
        recipeID,
        stepNo: Ingredients[i].stepNo,
        content: Ingredients[i].content,
      });
      if (Ingredinentinsert != null) {
        console.log("레시피 등록 성공");
      } else {
        return false;
      }
    }

    return true;
  } catch (error) {
    return false;
  }
}
const Recipeinsert = async (req, res) => {
  //recipe table만 완료
  const { userID, title, describe, category, level, time, steps, Ingredients } =
    req.body;
  //steps은 레시피의 단계 정보가 담겨 있는 객체 배열
  //Ingredients는 레시피의 재료가 들어있는 객체 배열
  //const userID = req.session.userID;
  try {
    const RecipeCreate = await Recipe.create({
      userID,
      title,
      describe,
      category,
      level,
      time,
    });
    let stepon = await stepinsert(RecipeCreate.dataValues.recipeID, steps);
    console.log(stepon);

    if (stepon != true) {
      console.log("레시피 단계 설정에서 오류가 발생하여, 레시피를 삭제합니다.");
      const recipedelete = await Recipe.destroy({
        where: { recipeID: RecipeCreate.dataValues.recipeID },
      });
      res.json({
        result: false,
        message: "해당 레시피 정보를 등록할 수 없습니다.",
      });
    } else {
      let ingredienton = await ingredientinsert(
        RecipeCreate.dataValues.recipeID,
        Ingredients
      );
      console.log(ingredienton);
      if (stepon != true) {
        console.log(
          "레시피 단계 설정에서 오류가 발생하여, 레시피를 삭제합니다."
        );
        const recipedelete = await Recipe.destroy({
          where: { recipeID: RecipeCreate.dataValues.recipeID },
        });
        res.json({
          result: false,
          message: "해당 레시피 정보를 등록할 수 없습니다.",
        });
      } else {
        res.json({
          result: true,
          message: "해당 레시피 정보를 등록하였습니다.",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
const Recipeupdate = async (req, res) => {
  //레시피 update 완료
  const { userID, title, describe, category, level, time, steps } = req.body;
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
    if (recipe != undefined) {
      const step = await Step.destroy({
        where: { recipeID },
      });
      let stepon = await stepinsert(recipeID, steps);
      if (stepon != true) {
        res.json({
          result: false,
          Message: "레시피 업데이트 완료! 단, 요리 순서 업데이트 실패",
        });
      } else {
        const step = await Step.destroy({
          where: { recipeID },
        });
        let ingredienton = await ingredientinsert(
          RecipeCreate.dataValues.recipeID,
          Ingredients
        );
        if (ingredienton != true) {
          res.json({
            result: false,
            Message: "레시피, 요리 순서 업데이트 완료! 단, 재료 등록에 실패",
          });
        } else {
          res.json({
            result: true,
            Message: "레시피 정보를 정상적으로 수정하였습니다.",
          });
        }
      }
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
  const { userID } = req.body;
  const { recipeID } = req.params;

  try {
    const Recipefind = await Recipe.findOne({
      where: {
        recipeID,
      },
    });
    console.log(Recipefind);
    if (Recipefind != null) {
      await Recipe.destroy({
        where: { userID, recipeID },
      });
      res.json({
        result: true,
        Message: "정상적으로 해당 레시피를 삭제하였습니다.",
      });
    } else {
      res.json({
        result: false,
        Message: "삭제할 수 있는 레시피가 존재하지 않습니다.",
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
      const stepfind = await Step.findAll({
        where: {
          recipeID,
        },
      });
      if (stepfind != null) {
        const ingredientfind = await Ingredient.findAll({
          where: {
            recipeID,
          },
        });
        if (ingredientfind != null) {
          req.json({
            result: true,
            Message: "정상적으로 Recipe data를 찾았습니다.",
            recipe: Recipefind,
            steps: stepfind,
          });
        } else {
          req.json({
            result: false,
            Message:
              "데이터베이스에서 레시피에 필요한 재료를 찾을 수 없습니다. 죄송합니다.",
          });
        }
      } else {
        req.json({
          result: false,
          Message:
            "데이터베이스에서 레시피 단계 데이터를 찾을 수 없습니다. 죄송합니다.",
        });
      }
    } else {
      req.json({
        result: false,
        Message:
          "데이터베이스에서 레시피 데이터를 찾을 수 없습니다. 죄송합니다.",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Recipeinsert, Recipeupdate, RecipeDelete, RecipefindOne };
