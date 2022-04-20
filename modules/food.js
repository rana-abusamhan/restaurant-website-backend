'use strict';

const axios=require('axios')

module.exports= handelData;

async function handelData (request,response){
    let searchQuery=request.query.query;
    // let url=`https://api.spoonacular.com/recipes/complexSearch?apiKey=f496a03899404166806e57724c13ffbc&query=${searchQuery}`
    let url=`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FOOD_API_KEY}&query=${searchQuery}`
    try {
        let result= await axios.get(url);
        const foodArray=result.data.results.map(item =>{
            return new Food (item);
        })
        response.status(200).send(foodArray)
    } catch (error) {
        errorHandler(error,response);
    }
}

function errorHandler(error,response){
    response.status(500).send(`something went wrong ==> ${error} `);
}


function Food (item){
    this.id=item.id;
    this.title=item.title;
    this.image=item.image;

}