const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
exports.main = async (event, context) => {
    let collection = db.collection("shop_product");
    await collection.add({
        data:{name:"JS编程",img:"",gid:"01", cid:"0", cname:"图书",price:"56.0",discount:"8.8",saleCount:34}
    });
    await collection.add({
        data:{name:"Python编程",img:"",gid:"02", cid:"0", cname:"图书",price:"86.0",discount:"9.0",saleCount:1234}
    });
    await collection.add({
        data:{name:"iOS编程",img:"",gid:"03", cid:"0", cname:"图书",price:"59.0",discount:"9.0",saleCount:66}
    });
    await collection.add({
        data:{name:"ReactNative",img:"",gid:"04", cid:"0", cname:"图书",price:"35.0",discount:"6.0",saleCount:16}
    });
    await collection.add({
        data:{name:"小程序开发",img:"",gid:"05", cid:"0", cname:"图书",price:"35.0",discount:"5.5",saleCount:626}
    });
    await collection.add({
        data:{name:"Vue编程",img:"",gid:"06", cid:"0", cname:"图书",price:"67.0",discount:"7.0",saleCount:124}
    });
    
    return;
}