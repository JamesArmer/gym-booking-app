import {v4 as uuidv4} from 'uuid';

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
    let user = await UserModel.findOne({userId: req.params.userId});
    res.send(user);
  },
);

router.post(
  '/create',
  async function (
    req: {body: {user: any}},
    res: {send: (arg0: string) => void},
  ) {
    let newUser = new UserModel(req.body.user);
    newUser.userId = uuidv4();
    await newUser.save();
    res.send(`Created user with ID: ${newUser.userId}`);
  },
);

module.exports = router;
