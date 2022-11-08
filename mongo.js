require("dotenv").config()
const mongoose = require("mongoose")

const url = process.env.MONGODB_URI

const scoreSchema = new mongoose.Schema({
    name: String, 
    score: Number, 
})

const Score = mongoose.model("Score", scoreSchema)

const scriptSchema 

mongoose.connect(url)
    .then( result => {
        console.log(`connected to ${url}`)

        const score = new Score({
            name: "Kooky",
            score: 10,
        })
        return score.save()
    })
    .then( () => {
        console.log("score saved")
        return mongoose.connection.close()
    })
    .catch( (error) => {
        console.log("error connecting to MongoDB:", error.message)
    })