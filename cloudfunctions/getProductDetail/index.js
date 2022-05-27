const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
exports.main = async (event, context) => {
    // 拿到参数
    let gid = event.gid;
    let collection = db.collection("shop_product");
    let data = await collection.where({
        gid:gid
    }).get();
    if (data.data.length > 0) {
        return  data.data[0];
    }
    return;
}