const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
module.exports = mongoose.connect('mongodb+srv://todolistapp:h1DT2XnCfMBOgzgG@todolistapp.8aowggl.mongodb.net/todolistapp?retryWrites=true&w=majority&appName=todolistapp',{
    useUnifiedTopology : true,
    useNewUrlParser : true,
    // useFindAndModify : true
}, err => {
    if(err) console.log(`Error in DB Connection ${err}`)
    console.log(`MongoDB Connection Suceeded.....`)
})