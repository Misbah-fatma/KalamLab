const mongoose = require("mongoose");


const courseSchema = mongoose.Schema(

  
  {
    courseName: {
      type: String,
      
    },
    courseDescription: {
      type: String,
      
    },

    courseThumbnail: {
      type: String,
     
    },

    courseLink :{
      type: String,
     
    },
    coursePrice : {
      type: Number,
 
    },

    coursePdf: {
      type: String,
    
    },

    role:{
      type: String,
 
  },

  teacherName : {
    type : String
  },

  popUpText :{
    type : String
  },

  type : {
  type : String
  },
 
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
},
lectures: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lecture'
  }
],

reviews: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  },
],

details: { 
  type: mongoose.Schema.Types.ObjectId, 
  ref: 'DetailsCourses' 
}


  },
  {
    timestamps: true,
  }
);



const CourseModel = mongoose.model("Course", courseSchema);

module.exports = CourseModel;