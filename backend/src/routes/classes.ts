import express, {NextFunction, Request, Response} from 'express';

const ClassModel = require('../models/class');
var router = express.Router();

/* POST new class */
router.post(
  '/create',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      let request = req.body;
      let newClass = new ClassModel(request);
      await newClass.save();
      res.json({classId: newClass._id});
    } catch (error: any) {
      console.error(error);
      res.status(400).json({error: error.message});
    }
  },
);

module.exports = router;
