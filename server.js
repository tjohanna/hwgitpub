const express = require('express');
const app = express();
const port = 3000;

// Set this 'database' to a variable called drinks in your server.jsfile
// const drinks = require("./models/drinks")
const menu = require("./models/food")

// //Middleware - 
// app.use(express.urlencoded({ extended: false}));

///////////////////////////////////////
// include a get route / that will res.send('Welcome to the Gitpub App!');so that when you got to localhost:3000, you will see Welcome to the Gitpub App!

// app.get('/drinks', (req, res) => {
//     res.send('welcome to the Gitpub App!')
// })

////////////////////////////////////

// app.get('/drinks/', (req,res) => {
//     // res.send(drinks);
//     res.render("drinks_index.ejs", {allDrinks: drinks})
// });

app.get('/food/', (req,res) => {
    // res.send(menu)
    res.render('food_index.ejs', {allMenu: menu});
});

//////////////////////////////////

// >_< I was receiving an error "res.send is not a function". After a while I researched and found out I had req, res in the wrong order!!!!!!! *face palm*
// app.get('/drinks/:id', (req, res) => {
//     // res.send(req.params.id);

//     res.render("drinks_show.ejs", {drink: drinks[req.params.id]})
// });


app.get('/food/:id', (req, res) => {
    // res.send(req.params.id);


    res.render("food_show.ejs", {menuItemDrinks: menu.drinks[req.params.id]})

    res.render("food_show.ejs", {menuItemFood: menu.food[req.params.id]})


});







app.listen(3000, () => {
    console.log('server running success');
});