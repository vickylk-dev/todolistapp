const express = require('express')
const cors = require('cors')
const router = require('./routes/routes')
const app = express()
require('./models/db')
app.use(express.json())
app.use(cors(
    {
        origin:["https://todolistapp-pkfw.vercel.app"],
        methods:["POST","GET","PUT","DELETE"],
        credentials:true

    }
))
app.use('/api/tasks' , router)

const PORT = process.env.PORT || 8080;
app.listen(PORT , err => {
    if(err) console.log(err)
    console.log(`Server is started at PORT number : ${PORT}`)
})
