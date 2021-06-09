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
STORE ROOM (Backend)
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

let is_shop_open = true;

let order = (time, work) => {
        /*
    =========================
    Our promise has 2 parts:

Resolved [ ice cream delivered ]
Rejected [ customer didn't get ice cream ]
    ==========================
    */
        return new Promise((resolve, reject) => {
            if (is_shop_open) {

                setTimeout(() => {

                    // work is 👇 getting done here
                    resolve(work())

                    // Setting 👇 time here for 1 work
                }, time)

            } else {

                reject(console.log("Our shop is closed"))

            }

        })
    }
    // step 1
    // Set 👇 time here
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
    //    pass a ☝️ function here to start working

// step 2
.then(() => {
    return order(0000, () => console.log('production has started'))
})

// step 3
.then(() => {
    return order(2000, () => console.log("Fruit has been chopped"))
})

// step 4
.then(() => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})

// step 5
.then(() => {
    return order(1000, () => console.log("start the machine"))
})

// step 6
.then(() => {
    return order(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`))
})

// step 7
.then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
})

// Step 8
.then(() => {
    return order(2000, () => console.log("Serve Ice Cream"))
})

.catch(() => {
    // This will work if the promise is rejected (shop is not open).
    // let is_shop_open = false; (Replace "let is_shop_open = true;" to catch an error)
    console.log("Customer left")
})

// works regardless of whether our promise was resolved or rejected
.finally(() => {
    console.log("end of day")
})