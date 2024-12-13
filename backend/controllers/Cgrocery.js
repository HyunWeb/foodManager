const { Op } = require("sequelize");
const db = require("../models");
const sequelize = require("sequelize");

const { Grocery } = require("../models/index"); //controller에서 필요한 것만 가져온다.


exports.getGrocery = async (req, res) => {
    try {
        const grocery = await FoodLog.findAll();
        res.json(grocery);
    } catch (error) {
        console.error(error);
        res.json({ result: false });
    }
}

// 푸드로그 등록
exports.postGrocery = async (req, res) => {
    try {
        const { category, groceryname, amount, unit, expiration } = req.body;
        await Grocery.create({
            userID: req.session.userInfo.userid,
            category: category,
            groceryname: groceryname,
            amount: amount,
            unit: unit,
            expiration: expiration,
        });
        res.json({ result: true });
    } catch (error) {
        res.json({ result: false });
        console.error(error);
    }
};

// 푸드로그 수정
exports.editGrocery = async (req, res) => {
    try {
        console.log(req.params);
        const { groceryID } = req.params;
        const grocery = await Grocery.findOne({
            where: { groceryID: groceryID },
        });

        const { userID } = grocery;


        // 세션에 저장된 userid와 log의 userID 일치할 경우 수정 가능
        if (req.session.userInfo.userid === userID) {
            const { category, groceryname, amount, unit, expiration } = req.body;
            await Grocery.update({
                category: category,
                groceryname: groceryname,
                amount: amount,
                unit: unit,
                expiration: expiration
            }, {
                where: { groceryID: groceryID }
            });
            res.json({ result: true });
        } else {
            res.json({ result: false });
        }
    } catch (error) {
        console.error(error);
        res.json({ result: false });
    }
};

// 푸드로그 삭제
exports.deleteGrocery = async (req, res) => {
    try {
        console.log(req.params);
        const { groceryID } = req.params;
        const grocery = await Grocery.findOne({
            where: { groceryID: groceryID },
        });

    const { userID } = grocery;

        // 세션에 저장된 userid와 log의 userID 일치할 경우 삭제 가능
        if (req.session.userInfo.userid === userID) {
            await Grocery.destroy({
                where: { groceryID: groceryID }
            });
            res.json({ result: true });
        } else {
            res.json({ result: false });
        }
    } catch (error) {
        console.error(error);
        res.json({ result: false });
    }
};
