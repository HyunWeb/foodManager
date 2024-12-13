const express = require("express");
const router = express.Router();
const controller = require("../controllers/CRecipe");

router.post("/insert", controller.Recipeinsert); //레시피를 추가를 요청하는 router

router.get("/find/:recipeID", controller.RecipefindOne); // 레시피의 정보를 찾는 라우터

router.post("/update/Like", controller.RecipeLikeDB); // 레시피의 찜 정보를 업데이트

router.post("/find/Like", controller.RecipeLikeFindOne); //레시피 클릭 시 찜 정보 확인 목적

router.post("/finds/Like", controller.RecipeLikeFindAll); // 레시피 전체 찜 목록

router.post("/insert/review", controller.RecipeReviewinsert); //레시피 리뷰 추가

router.patch("/update/review", controller.RecipeReviewupdate); //레시피 리뷰 수정

router.patch("/update/:recipeID", controller.Recipeupdate); //레시피의 update를 담당

router.delete("/delete/Review", controller.RecipeReviewDelete); // 레시피 리뷰 삭제.

router.delete("/delete/:recipeID", controller.RecipeDelete); //레시피를 삭제 요청

router.post("/find/reviews", controller.RecipeReviewFindAll);
//레시피의 전체 리뷰를 가져옴 - 레시피 가져오는 코드가 길어져 가독성이 떨어지는 듯?

router.post("/find/myreview", controller.RecipeReviewMYfind);
//자신이 남긴 리뷰 목록

module.exports = router;