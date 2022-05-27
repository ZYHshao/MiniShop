const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
exports.main = async (event, context) => {
    let orderId = event.orderId;
    let address = event.address;
    return db.collection("shop_order").doc(orderId).update({
        data:{
            state:1,
            stateText:"待发货",
            address:address
        }
    });
}