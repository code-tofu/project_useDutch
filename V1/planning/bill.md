```javascript
const users = [ {name: "A"},{name: "B"},{name: "C"}] //id is the index

const items = [
    {name:"one", price:"7.99", split: [0.25, 0.5, 0.25]},
    {name:"two", price:"8.99", split: [0.25, 0.5, 0]},
    {name:"three", price:"9.99", split: [0.5, 0, 0.5]}] //id is the index

//generate copies each item split into the dutch array
const dutch = {
    [{0.25*7.99},{0.25*8.99},{0.5*9.99}],
    subtotal: 0.25*7.99 + 0.25*8.99 + 0.5*9.99,
    SVC: 0.1 * (0.25*7.99 + 0.25*8.99 + 0.5*9.99),
    GST: 0.09 * (0.25*7.99 + 0.25*8.99 + 0.5*9.99 + SVC),
    total: subtotal + svc + gst,
    paid: 
}

const settle = [{pay:1,amount:2.50},{pay:2,amount:3.50}]
const round = [{dutch,dutch,dutch}] //corresponds to user index
const party = [{round1,round2,}]

[
    "Andy",
    "Bob",
    "Chris",
]
[
    {
        "name": "Dish One",
        "price": 7.99,
        "split": [
            0.25,
            0.5,
            0.25
        ]
    },
    {
        "name": "Dish Two",
        "price": 8.99,
        "split": [
            0.25,
            0.5,
            0
        ]
    },
    {
        "name": "Dish Three",
        "price": 9.99,
        "split": [
            0.5,
            0,
            0.5
        ]
    }
]

```