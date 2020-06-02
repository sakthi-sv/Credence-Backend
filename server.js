const express=require('express')
const app=express()
app.use(express.json())
const mongoose=require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error("hi",error))
db.once('open', () => console.log('connected to database'))


const movieController=require("./controller/movieController")();
const movieRouter=require("./routes/movieRouter")(movieController);

app.use('/movies',movieRouter.getRouter());

app.listen(3000, () => {
    console.log("Server running on port : 3000") })