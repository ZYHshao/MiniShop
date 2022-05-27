const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
const _ = db.command;
exports.main = async (event, context) => {
    // 拿到检索参数
    let key = event.key;
    let collection = db.collection("shop_product");
    let data = await collection.where(_.or({
        cname:db.RegExp({
            regexp:key
        })
    },{
        name:db.RegExp({
            regexp:key
        })
    })).get();
    return data.data;
}