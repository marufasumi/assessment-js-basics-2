///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

console.log('problem 1')
console.log('---------------------')

let pizza ={
name: "Dominos",
price:5 ,
catagory:"entree", 
popularity:5,
rating:4, 
tags:['glutten-free','kids','Halal','Spicy']}



//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log('problem 2')
console.log('---------------------')

console.log(`Popularity of this Pizza is ${pizza.popularity}`)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
const x = pizza.tags[1]
console.log(` Second tag of pizza object is ${x}`)
const y = pizza['tags'][1]
console.log(` Second tag of pizza object is ${y}`)

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
let{price}=pizza;
console.log(`The price value is ${price}`)


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
let {catagory}=pizza;
console.log(` Catagory value is ${catagory}`);


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
console.log('problem 3')
console.log('---------------------')


let foodArr = [
    {
      name: "chow mein",
      price: 8,
      catagory:'entree',
      popularity:4,
      rating:4,
      tags: ["noodle"],
    },
    {
      name: "chicken katsu rice",
      price: 14,
      catagory:'entree',
      popularity:4.5,
      rating:3,
      tags: ["rice", "meat"],
    },
    {
      name: "beef pho",
      price: 10,
      catagory:'entree',
      popularity:4,
      rating:4.5,
      tags: ["noodle", "meat", "soup"],
    },
    {
      name: "pancake",
      price: 7,
      catagory:'apetizer',
      popularity:5,
      rating:4.5,
      tags: ["breakfast", "carbs"],
    },
    {
      name: "chicken curry rice",
      price: 12,
      catagory:'entree',
      popularity:5,
      rating:4,
      tags: ["meat", "rice"],
    },
    {
      name: "kalua pork rice",
      price: 10,
      catagory:'entree',
      popularity:4.7,
      rating:4.1,
      tags: ["meat", "rice",'lunch'],
    },
  ];
//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE
console.log('problem 4')
console.log('---------------------')

const filteredFood =foodArr.filter((food) => {
    return food.tags.includes("meat")
})

console.log(filteredFood)
//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/
//property =rating,popularity or price
//number =input i want to compare against
// type =above/below the number
//
//CODE HERE
console.log('problem 5')
console.log('---------------------')

function filterByProperty(property,num,type) {
    let filterArray =[]
    foodArr.filter(function(elem){
        if (elem.rating>num ||elem.popularity>num||elem.price>num) {
             filterArray.push(elem)
        
        }

    })
    return filterArray
    
}


/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
console.log(filterByProperty("price", 10, 8 ))
