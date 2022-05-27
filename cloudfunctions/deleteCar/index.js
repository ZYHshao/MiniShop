// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    let openId = wxContext.OPENID;
    let gid = event.gid;
    let collection = db.collection("shop_car");
    return collection.where({
        gid:gid,
        openId:openId
    }).remove();
}