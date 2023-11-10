var express = require('express');
var router = express.Router();

/* GET single user by ID. */
router.get('/', function (req: any, res: any) {
  res.send('Hello World!');
});

module.exports = router;
