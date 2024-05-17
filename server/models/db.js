const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb+srv://todolistapp:h1DT2XnCfMBOgzgG@todolistapp.8aowggl.mongodb.net/todolistapp?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, err => {
    if (err) console.error(`Error in DB Connection ${err}`);
    console.log(`MongoDB Connection Succeeded.....`);
});
