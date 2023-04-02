const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/testing");
};
const student = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  favFoods: [{ type: String }],
  info: {
    school: {
      type: String,
    },
    rollNo: {
      type: Number,
    },
  },
});

const Student = mongoose.model("student", student);

connect()
  .then(async (connection) => {
    const student1 = await Student.create({
      firstName: "anjali",
      favFoods: ["pizza", "burger", "paste", "paneer-tikka"],
      info:{
        school:"Campion",
        rollNO:41
      }
    });
    console.log(student1);
  })

  .catch((e) => console.error(e));
