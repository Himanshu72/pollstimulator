var express = require('express');
var router = express.Router();
let dataAccess = require("../datalayer/data");
/* GET users listing. */
router.get('/', function (req, res, next) {

  let list = dataAccess.getAll();
  res.render('index', { title: 'Vote', show: false, list: list.candidate, msg: "" });
});

router.post("/vote", (req, res) => {
  let list = dataAccess.getAll();
  let status = dataAccess.vote(req.body.stuID, req.body.canID);
  if (status == 0)
    res.render('index', { title: 'Vote', show: true, msg: "You have already voted", list: list.candidate });
  res.render('index', { title: 'Vote', show: true, msg: "Thanks For voting", list: list.candidate });
})
module.exports = router;
