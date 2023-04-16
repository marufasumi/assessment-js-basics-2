///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
console.log('problem 1')
console.log('---------------------')
const summedPrice = cart.reduce((a, food) => {
    return a + food.price
}, 0)

console.log(`Sum of all foods price is ${summedPrice} dollars`);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
console.log('problem 2')
console.log('---------------------')
function calcFinalPrice(cartTotal,couponValue,tax) {
    return (cartTotal*tax +cartTotal)-couponValue
    
}

let priceAfterTaxWithCupon = calcFinalPrice(summedPrice,2,.06);


console.log(`Price after adding Tax and Cupon is ${priceAfterTaxWithCupon} dollars`)





//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    MODEL FOR CUSTOMER OBJECT
    //List Customer Informations required for a resturant
    1.Customer creation date (datatype -date-time )=>To fetch the  date and time when the customer was created.
    2.CusomerID(Number)=> A unique identifier for the customer.
    3.Customer displayName-(string) => Full name of a customer.
    4.Phone (number) => Phone number of customer.
    5.Email(string) => Email of the customer.
    6.Food preference/tag (list[string]) => A comma separated list of tags that have been added to the customer.
    7.Customer defaultAddress (string)=>customer mailing address
    8.accept marketing (boolean)=>Indicates whether the customer has consented to be sent marketing material via email.
    9.No of orders(number) => The number of orders that the customer has made at the store in their lifetime.
    

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
console.log('problem 3')
console.log('---------------------')

let customer ={
    ID:1,
    CreationDate:15-04-2023,
    Name:"Marufa Sumi",
    PhoneNumber:8599138419,
    Email:'marufasumi081@gmail.com',
    address:'2780, parkway circle ,sterling Heights , Michigan',
    tags:["gluteen-free",'Halal'],
    totalNoOforders:8,
    acceptMarketing:true

}
console.log('problem 3')
console.log('---------------------')
console.log(customer)

