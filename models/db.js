const mongoose = require("mongoose")

const url = process.env.MONGODB_URI

console.log("connecting to", url)

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true})

.then(result => {
    console.log("connected to MongoDB")
})
.catch(error => {
    console.log("error connecting to MongoDB:", error.message)
})

const scoreSchema = new mongoose.Schema({
    name: String, 
    score: Number, 
})

scoreSchema.set("toJson", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

Score = mongoose.model("Score", scoreSchema)

const scriptSchema = new mongoose.Schema({
    Madagascar: Array, 
    Madagascar2: Array
})

scriptSchema.set("toJson", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

Script = mongoose.model("Script", scriptSchema)

module.exports = {
    Score, Script
}