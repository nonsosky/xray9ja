//--Module dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

//--Express app setup
const app = express();

//--public directory
app.use(express.static(path.join(__dirname, 'public')));


const port = process.env.PORT || 3000;

//express-handlebars middleware
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, ()=>{
  console.log(`Server is up on port [${port}]`);
});