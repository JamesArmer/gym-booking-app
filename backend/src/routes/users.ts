import {IUser} from '../models/user';
import {setToMidnightUTC} from '../utility/functions';
import express, {NextFunction, Request, Response} from 'express';

const UserModel = require('../models/user');
var router = express.Router();

/* GET single user by ID. */
router.get(
  '/:userId',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      let user = await UserModel.findById(req.params.userId);
      if (!user) {
        res
          .status(404)
          .json({error: `Record with userId ${req.params.userId} not found`});
      } else {
        res.send(user);
      }
    } catch (error: any) {
      console.error(error);
      res.status(400).json({error: error.message});
    }
  },
);

/* POST new user */
router.post(
  '/create',
  async function (req: Request<IUser>, res: Response, next: NextFunction) {
    try {
      let request = req.body;
      let sanitisedDob = setToMidnightUTC(request.dateOfBirth);
      request.dateOfBirth = sanitisedDob;
      let newUser = new UserModel(request);
      await newUser.save();
      res.json({userId: newUser._id});
    } catch (error: any) {
      console.error(error);
      res.status(400).json({error: error.message});
    }
  },
);

/* PUT update user */
router.put(
  '/update/:userId',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      let userId = req.params.userId;
      let updatedUserDetails = req.body;
      let user = await UserModel.findByIdAndUpdate(userId, updatedUserDetails, {
        new: true,
      });

      if (!user) {
        return res.status(404).json({error: 'User not found'});
      }

      res.json({user});
    } catch (error: any) {
      console.error(error);
      res.status(400).json({error: error.message});
    }
  },
);

module.exports = router;
