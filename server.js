'use strict';

require('dotenv').config()
const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const server = express();
server.use(cors());
server.use(express.json());

const handelData = require('./modules/food.js')

server.get('/', (req, res) => {
    res.send('Home route')
})

// server.get('/addUser', addUser)
server.get('/getDataAPI', handelData)
// server.post('/addOrder', handleOrder)
// server.get('/getOrders', getOrders)
// server.delete('/deleteOrder/:index', deleteOrder)

// const mongoose = require('mongoose');
// // mongoose.connect('mongodb://localhost:27017/food', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://localhost:27017/food', { useNewUrlParser: true, useUnifiedTopology: true });

// const orderSchema = new mongoose.Schema({
//     title: String,
//     image: String

// })

// const userSchema = new mongoose.Schema({
//     email: String,
//     order: [orderSchema]
// })



// const userModel = mongoose.model('users', userSchema);


// Add new user

// function addUser(request, response) {
//     const { email } = request.query;
//     console.log(email)
//     const user = new userModel({
//         email: email
//     })
//     user.save();
//     response.status(200).send(userModel)
// }

// Post orders 
// function handleOrder(request, response) {

//     const { title, image, email } = request.body;
//     userModel.find({email:email},(error,userData)=>{
//         if (error) console.log("we have an error");
//         userData[0].order.push({
//             title:title,
//             image:image,
//         })
//         userData[0].save();
//     })
  
// }

// Get the orders
// http://localhost:3001/getOrders?email=rana.abusamhan@gmail.com
// function getOrders(request, response) {
//     const email = request.query.email;
//     userModel.find({ email: email }, (err, userData) => {
//         if (err) {
//             return console.log(err)
//         }
//         console.log(userData[0].order);
//         response.status(200).send(userData[0].order)
//     })
// }


// Delete order 
// function deleteOrder(request, response) {
//     const { email } = request.query;
//     const index = Number(request.params.index)
//     userModel.find({ email: email }, (err, userData) => {
//         if (err) return console.log(err)
//         const newOrders = userData[0].order.filter((order, idx) => {
//             if (idx != index) {
//                 return order;
//             }
//         })
//         userData[0].order = newOrders;
//         userData[0].save();
//         response.status(200).send(userData[0].order);
//     })
// }





server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})