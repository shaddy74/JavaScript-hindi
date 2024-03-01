const myNums = [1, 2, 3 ]


// const myTotal = myNums.reduce(function (accumulater, currentvalue) {
//     console.log(`accumulater: ${accumulater} and currentValue: ${currentvalue}`);
//     return accumulater + currentvalue
// }, 0)



const myTotal = myNums.reduce( (acc , curr) => acc+curr, 0)
// console.log(myTotal)


const shopingCart = [
    {itemName: "Blazer for Men",
    price: 2999},
    {
        itemName: "Bata mens KOKO",
        price: 599 
    },
    {itemName: "Teso Pro Lunch Box",
    price: 829},
    {itemName: "I Phone13",
    price: 62999},
]

const totalBill = shopingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalBill);