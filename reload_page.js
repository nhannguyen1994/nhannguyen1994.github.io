//TODO: Hãy viết khung một ứng dụng Express vào đây. hãy tham khảo https://github.com/TechMaster/learn_express

const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const path = require("path");
const recursive = require('recursive-readdir');


//--------Body Parser ----------------------
const bodyParser = require("body-parser");



// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
    extended: true  //value of parameter can be any type https://expressjs.com/en/resources/middleware/body-parser.html
}));


//--------Serve static resource -------------
app.use('/public', express.static('public'));

//---------View Template Engine -------------
;
nunjucks.configure('views', {
    autoescape: true,
    cache: false,
    express: app,
    watch: true
});

app.engine('html', nunjucks.render);
app.set('view engine', 'html');


 app.get('/', function(req,res){
    let pic = ["bird.png","bus.png", "car.png" , "cat.png", "seahorse.png", "turtle.png", "tv.png"];
     let data = {
         pic : pic
     }

     res.render('reload_page.html',data);

 });


 app.post('/getpicture', function(req,res) {
     let select= req.body.select;
     let pathPic= '';
         if (select === "1"){
             pathPic = path.join("public", "image");
         }
         if (select === "2"){
             pathPic = path.join("public", "image", "animal");
         }
         if (select === "3"){
             pathPic = path.join("public", "image", "things");
         }
     recursive (pathPic, (err, pictures) => {
         let data = {
             "pictures" : pictures
         };
     res.render ("reload_page.html", data);
 });
 });


// ------------app.listen----------------
const port = 3000;
app.listen(port, () => {
    console.log(' http://localhost:' + port);
});
