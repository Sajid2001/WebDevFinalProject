
var express = require('express');
const router = express.Router();

const fs = require('fs');
let rawData = fs.readFileSync("./courses.json");
let course = JSON.parse(rawData);

router.get('/',(req,res) =>{
  let outputJSON = {
    courses : course["courses"]
  }
  res.json(outputJSON);
});

router.get("/by_course_code/:qcode",(req,res) => {
  let code_query = req.params['qcode']
  filtered_courses = course["courses"].filter(q => q.course_code.includes(code_query))
  let outputJSON = {
    courses : filtered_courses
  }
  res.json(outputJSON);
});


router.get("/by_instructor/:qname",(req,res) => {
  let name_query = req.params['qname']
  filtered_courses = course["courses"].filter(q => q.instructor.includes(name_query))
  let outputJSON = {
    courses : filtered_courses
  }
  res.json(outputJSON);
});

router.get("/by_level/:qlevel",(req,res) => {
  let level = req.params["qlevel"]
  filtered_courses = course["courses"].filter(
    q => {
      if (q.course_level == level)
      {
        return true;
      }
        return false;
    }
  );
  let outputJSON = {
    courses : filtered_courses
  }
  res.json(outputJSON);
});

router.get("/combined_query/:qname/:qlevel",(req,res) => {
  let name_query = req.params["qname"]
  let level_query = req.params["qlevel"]

  filtered_courses = course["courses"].filter(
    q => {
      if (q.course_level == level_query && q.instructor.includes(name_query))
      {
        return true;
      }
        return false;
    }
  );

  let outputJSON = {
    courses : filtered_courses
  }
  res.json(outputJSON);
});

module.exports = router;
