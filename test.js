const mongoose=require('mongoose')

const connect =()=>{
    return mongoose.connect('mongodb://localhost:27017/testing')
}
const student = new mongoose.Schema({
    firstName:String

})

const Student = mongoose.model('student',student)



connect()
.then (async connection => {
    const student1 = await Student.create({firstName:"anjali"})
    console.log(student1)
})

.catch(e => console.error(e))