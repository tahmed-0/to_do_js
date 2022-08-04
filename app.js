

const express = require('express');
const bodyParser = require('body-parser');


//get date module 
const date = require(__dirname+'/date.js');

const app = express();

//item var 
var items = ["Buy food", "Buy book"];
var workItems = [];

//ejs set up 
//must be placed below const app
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

//css file
app.use(express.static("public"));



app.get('/', (req, res) => {

   //get the date.js file
   let day = date.getDate();
    
    //rendering a file called list.ejs 
    //has var called kindOfDay
    //the day gets passed into kindOfDay
    //you only you use 'list' one times
    res.render('list', {

        //list title var is from list.ejs
        listTitle: day, 
        newListItems: items});


});

app.post('/', (req, res) => {
     let item = req.body.newItem;


     //if the item is from the work list than add it to the work list
    if(req.body.list === "Work") {
        workItems.push(item);

        //after adding the item go back to the work route
        res.redirect("/work")

        //else add to the item list
    } else {

    items.push(item);

   res.redirect("/")

    }

    

    
});

//work route
//another tab

app.get('/work', (req, res) => {
    res.render("list", {listTitle: "Work List", newListItems: workItems});

});


app.get('/about', (req, res) => {

    //renders the about.ejs
    res.render("about");

})

app.post("/work", (req, res) => {
    let item = req.body.newItem;

    //add the new item user added
    workItems.push(item);
    res.redirect("/work");

});



app.listen(3000, (req, res) => {
    console.log("listening on http://localhost:3000")
})