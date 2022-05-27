const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
exports.main = async (event, context) => {
    let collection = db.collection("shop_category");
    await collection.add({
        data:{
            cid:'0',
            title:'图书',
        }
    });
    await collection.add({
        data:{
            cid:'1',
            title:'家电',
        }
    });
    await collection.add({
        data:{
            cid:'2',
            title:'食品',
        }
    });
    await collection.add({
        data:{
            cid:'3',
            title:'上衣',
        }
    });
    await collection.add({
        data:{
            cid:'4',
            title:'裤子',
        }
    });
    await collection.add({
        data:{
            cid:'5',
            title:'童装',
        }
    });
    await collection.add({
        data:{
            cid:'6',
            title:'百货',
        }
    });
    await collection.add({
        data:{
            cid:'7',
            title:'电子',
        }
    });
    await collection.add({
        data:{
            cid:'8',
            title:'玩具',
        }
    });
    await collection.add({
        data:{
            cid:'9',
            title:'美妆',
        }
    });
    return;
}