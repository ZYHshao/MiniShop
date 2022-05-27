const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext();
    let openId = wxContext.OPENID;
    let collection = db.collection("shop_car");
    let productC = db.collection("shop_product");
    let data = await collection.where({
        openId:openId
    }).get();
    let gArray = data.data;
    for (let j = 0; j < gArray.length; j++) {
        let v = gArray[j];
        let p = await productC.where({
            gid:v.gid
        }).get();
        v.detail = p.data[0];
    }
    return gArray;
}