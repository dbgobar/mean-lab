var mongoose = require("./schema")
var seedData = require("./seeds")

var Sundae = mongoose.model("Sundae");

Sundae.remove({}).then(function(){
  Sundae.collection.insert(seedData).then(function(){
    process.exit();
  });
});

// var InstructorModel = require("../models/instructor")
// var StudentModel = require("../models/student")


// InstructorModel.remove({}, function(err){
// })
// StudentModel.remove({}, function(err){
// })
//
// var instructor1 = new InstructorModel({name: "bob"})
// var instructor2 = new InstructorModel({name: "charlie"})
// var instructor3 = new InstructorModel({name: "tom"})
//
// var student1 = new StudentModel({name: "Diana"})
// var student2 = new StudentModel({name: "Joe"})
// var student3 = new StudentModel({name: "Bob"})
// var student4 = new StudentModel({name: "Rachel"})
// var student5 = new StudentModel({name: "Celine"})
// var student6 = new StudentModel({name: "Blahb"})
//
// var instructors = [instructor1, instructor2, instructor3]
// var students = [student1, student2, student3, student4, student5, student6]
//
// for(var i = 0; i < instructors.length; i++){
//  console.log(instructors[i])
//  instructors[i].students.push(students[i], students[i+3])
//  instructors[i].save(function(err){
//    if (err){
//      console.log(err)
//    }else {
//      console.log("instructor was saved")
//    }
//  })
// }
