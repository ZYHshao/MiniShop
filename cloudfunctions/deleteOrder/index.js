// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    let openId = wxContext.OPENID;
    let orderId = event.orderId;
    let collection = db.collection("shop_order");
    return collection.where({
        _id:orderId,
        openId:openId
    }).remove();
}