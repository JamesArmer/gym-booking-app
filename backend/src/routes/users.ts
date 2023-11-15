const UserModel = require('../models/user');

var express = require('express');
var router = express.Router();

/* GET single user by ID. */
router.get(
  '/:userId',
  async function (
    req: {params: {userId: string}},
    res: {send: (arg0: any) => void},
  ) {
    let user = await UserModel.findOne({_id: req.params.userId});
    res.send(user);
  },
);

router.post('/create', async function (req: {body: any}, res: any) {
  let newUser = new UserModel(req.body);
  await newUser.save();
  res.json({userId: newUser._id});
});

module.exports = router;
