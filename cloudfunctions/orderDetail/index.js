const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
const _ = db.command;
exports.main = async (event, context) => {
    let orderId = event.orderId;
    let orderDoc = await db.collection("shop_order").doc(orderId).get();
    console.log(orderDoc);
    let order = orderDoc.data;
    console.log(order);
    let productC = db.collection("shop_product");
    let data = await productC.where({
        gid:_.in(order.gids)
    }).get();
    let  gArray = data.data;
    order.gArray = gArray;
    return order;
}