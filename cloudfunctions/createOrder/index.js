const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
const _ = db.command;
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    let openId =  wxContext.OPENID;
    let gids = event.gids;
    let address = "尚未选择地址";
    let productC = db.collection("shop_product");
    let data = await productC.where({
        gid:_.in(gids)
    }).get();
    let gArray = data.data;
    let sum = 0;
    let title = "";
    let imgs = [];
    for (let j = 0; j < gArray.length; j++) {
        let v = gArray[j];
        sum += Number(v.price);
        title += v.name + ' ';
        imgs.push(v.img);
    }
    let collection = db.collection("shop_order");
    return collection.add({
        data:{
            gids:gids,
            openId:openId,
            state:0,
            stateText:"待支付",
            freight:0,
            address:address,
            sum:sum,
            img:imgs,
            title:title
        }
    });
}