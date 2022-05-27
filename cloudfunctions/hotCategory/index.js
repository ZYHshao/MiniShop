const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
exports.main = async (event, context) => {
    let collection = db.collection("shop_category");
    let data = await collection.get();
    if (data.data.length==0) {
        let res = await cloud.callFunction({
            name:"hotCategoryMock"
        });
        if (res != null) {
            console.log(res);
        }
        data = await collection.get();
    }
    return data.data;
}