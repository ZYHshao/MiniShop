const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
const _ = db.command;
exports.main = async (event, context) => {
    let state = Number(event.state);
    const wxContext = cloud.getWXContext();
    let openId = wxContext.OPENID;
    let orderDoc;
    if (state == -1) {
        orderDoc = await db.collection("shop_order").where({
            openId:openId
        }).get();
    } else {
        orderDoc = await db.collection("shop_order").where({
            state:state,
            openId:openId
        }).get();
    }
    let orders = orderDoc.data;
    console.log(orders);
    return orders;
}