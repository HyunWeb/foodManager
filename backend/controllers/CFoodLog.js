const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../models");
const sequelize = require("sequelize");
const { update } = require("sequelize/lib/model");

const { FoodLog } = require("../models/index"); //controller에서 필요한 것만 가져온다.

// 푸드로그 등록
exports.postLog = async (req, res) => {
  try {
    const { category, foodname, amount, unit, kcal, mealtype, when } = req.body;
    await FoodLog.create({
      userID: req.session.userInfo.userid,
      category: category,
      foodname: foodname,
      amount: amount,
      unit: unit,
      kcal: kcal,
      mealtype: mealtype,
      when: when,
    });
    res.send({ result: true });
  } catch (error) {
    res.send({ result: false });
    console.error(error);
  }
};

// 푸드로그 수정
exports.editLog = async (req, res) => {
  try {
    console.log(req.params);
    const { when, logID } = req.params;
    const log = await FoodLog.findOne({
      where: { logID: logID },
    });

    const { userID } = log;

    // 세션에 저장된 userid와 log의 userID 일치할 경우 수정 가능
    if (req.session.userInfo.userid === userID) {
      const { category, foodname, amount, unit, kcal, mealtype } = req.body;
      await FoodLog.update(
        {
          category: category,
          foodname: foodname,
          amount: amount,
          unit: unit,
          kcal: kcal,
          mealtype: mealtype,
        },
        {
          where: { logID: logID },
        }
      );
      res.send({ result: true });
    }
  } catch (error) {
    console.error(error);
    res.send({ result: false });
  }
};

// 푸드로그 삭제
exports.deleteLog = async (req, res) => {
  try {
    console.log(req.params);
    const { when, logID } = req.params;
    const log = await FoodLog.findOne({
      where: { logID: logID },
    });

    const { userID } = log;

    // 세션에 저장된 userid와 log의 userID 일치할 경우 삭제 가능
    if (req.session.userInfo.userid === userID) {
      await FoodLog.destroy({
        where: { logID: logID },
      });
      res.send({ result: true });
    }
  } catch (error) {
    console.error(error);
    res.send({ result: false });
  }
};
