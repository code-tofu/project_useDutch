var _gst = 0.09
var _svc = 0.1

function calculateTotals(items,isGST,isSVC){
    const subtotal = items.reduce((sum,item)=>sum + item,0)
    const svc = _svc * subtotal * isGST;
    const gst = _gst *(subtotal + svc) * isSVC;
    return {
        subtotal:subtotal,
        total: subtotal+svc+gst
    }
}

function calculateSpent(items, idx) {
    let spent = [];
    let subtotal = 0.0;
    items.forEach(item=> {
        const cost = item.price * item.split[idx]        
        spent.push({[item.name]:cost})
        subtotal += cost;
    })
    const svc = _svc * subtotal;
    const gst = _gst *(subtotal + svc);
    return {
        spent:spent,
        subtotal:subtotal,
        serviceCharge:svc,
        tax:gst,
        total: subtotal+svc+gst
    };
}

function generateBill(items,paid,users){
    let bill =[]
    for(let i=0;i<users.len;i++){
        let dutch = calculateSpent(items,i);
        dutch.paid=paid[i];
        dutch.name=users[i];
        bill.push(dutch);
    }
    return bill;
}

const users = ["A","B","C"];
const paid = [20.00,12.337,0];
const items = [
    {name:"dishone", price:7.99, split: [0.25, 0.5, 0.25]},
    {name:"dishtwo", price:8.99, split: [0.5, 0.5, 0]},
    {name:"dishthree", price:9.99, split: [0.5, 0, 0.5]}]
//26.97, 32.337
console.log("USERS",users)
console.log("PAID",paid)
console.log("ITEMS",items)
console.log(generateBill(items,paid,users))




