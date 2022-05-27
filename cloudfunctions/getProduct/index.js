const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
exports.main = async (event, context) => {
    // 拿到参数
    let limit = event.limit;
    let offset = event.offset;
    let cid = event.cid;
    let collection = db.collection("shop_product");
    let data = await collection.where({
        cid:cid
    }).skip(offset).limit(limit).get();
    if (data.data.length==0 && offset == 0 && cid == "0") {
        let res = await cloud.callFunction({
            name:"getProductMock"
        });
        if (res != null) {
            console.log(res);
        }
        data = await await collection.where({
            cid:cid
        }).skip(offset).limit(limit).get();
    }
    return data.data;
}