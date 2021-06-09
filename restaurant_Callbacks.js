/*
=============================
PROCESS
1. Place order (from customer)
2. Fetch Ingredients
3. Start production
4. Serve
================
*/

/*
======================
STORE ROOM
=================
*/
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

/*
======================
KITCHEN (Frontend)
================
*/

// 1st Function

let order = (fruit_name, call_production) => {

    setTimeout(function() {

        console.log(`${stocks.Fruits[fruit_name]} was selected`)

        // Order placed. Call production to start
        call_production();
    }, 2000)
};

// 2nd Function

let production = () => {

    setTimeout(() => {
        console.log("production has started")
        setTimeout(() => {
            console.log("The fruit has been chopped")
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
                setTimeout(() => {
                    console.log("start the machine")
                    setTimeout(() => {
                        console.log(`Ice cream placed on ${stocks.holder[1]}`)
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} as toppings`)
                            setTimeout(() => {
                                console.log("serve Ice cream")
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000)

};

// Trigger 👇
order(0, production);

/*
Find Nested SetTimeout() code confusing? Its Kown as the
callback hell 👇

.....................
  ...................
    .................
      ...............
        .............   <====  CALLBACK HELL
           ..........
        .............
    .................
  ...................
*/

// JavaScript Promises help out of this hell