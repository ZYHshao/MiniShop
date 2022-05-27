wx.cloud.init();
var server = {
    getHotCategory:function(callback) {
        wx.cloud.callFunction({
            name:"hotCategory",
        }).then(res=>{
            callback(res.result);
        }).catch(error=>{
            wx.showToast({
              title: `获取热门分类失败`,
              icon:"none"
            })
            console.log(error);
        });
    },
    getProductList:function(offset, limit,cid,callback) {
        wx.cloud.callFunction({
            name:"getProduct",
            data:{
                offset:offset,
                limit:limit,
                cid:cid
            }
        }).then(res=>{
            callback(res.result);
        }).catch(error=>{
            wx.showToast({
              title: `获取商品列表失败`,
              icon:"none"
            })
            console.log(error);
        });
    },
    getVirtualCategory:function(callback) {
        wx.cloud.callFunction({
            name:"getVirtualCategory",
        }).then(res=>{
            callback(res.result);
        }).catch(error=>{
            wx.showToast({
              title: `获取虚拟分类失败`,
              icon:"none"
            })
            console.log(error);
        });
    },
    searchProduct:function(key,callback){
        wx.cloud.callFunction({
            name:"searchProduct",
            data:{
                key:key
            }
        }).then(res=>{
            callback(res.result);
        }).catch(error=>{
            wx.showToast({
              title: `搜索失败`,
              icon:"none"
            })
            console.log(error);
        });
    },
    getProductDetail:function(gid, callback) {
        wx.cloud.callFunction({
            name:"getProductDetail",
            data:{
                gid:gid
            }
        }).then(res=>{
            callback(res.result);
        }).catch(error=>{
            wx.showToast({
              title: `获取商品详情失败`,
              icon:"none"
            })
            console.log(error);
        });
    },
    addToCar:function(gid, callback) {
        wx.cloud.callFunction({
            name:"addToCar",
            data:{
                gid:gid
            }
        }).then(res=>{
            callback();
        }).catch(error=>{
            wx.showToast({
              title: `加入购物车失败`,
              icon:"none"
            })
            console.log(error);
        });
    },
    getCarInfo:function(callback) {
        wx.cloud.callFunction({
            name:"carInfo",
        }).then(res=>{
            callback(res.result);
        }).catch(error=>{
            wx.showToast({
              title: `获取购物车详情失败`,
              icon:"none"
            })
            console.log(error);
        });
    },
    deleteCar:function(gid, callback) {
        wx.cloud.callFunction({
            name:"deleteCar",
            data:{
                gid:gid
            }
        }).then(res=>{
            callback(res.result);
        }).catch(error=>{
            wx.showToast({
              title: `删除商品失败`,
              icon:"none"
            })
            console.log(error);
        });
    },
    createOrder:function(gids, callback) {
        wx.cloud.callFunction({
            name:"createOrder",
            data:{
                gids:gids
            }
        }).then(res=>{
            callback(res.result);
        }).catch(error=>{
            wx.showToast({
              title: `创建订单失败`,
              icon:"none"
            })
            console.log(error);
        });
    },
    orderDetail:function(orderId, callback) {
        wx.cloud.callFunction({
            name:"orderDetail",
            data:{
                orderId:orderId
            }
        }).then(res=>{
            callback(res.result);
        }).catch(error=>{
            wx.showToast({
              title: `获取订单详情失败`,
              icon:"none"
            })
            console.log(error);
        });
    },
    pay:function(orderId, address, callback) {
        wx.cloud.callFunction({
            name:"payOrder",
            data:{
                orderId:orderId,
                address:address
            }
        }).then(res=>{
            callback(res.result);
        }).catch(error=>{
            wx.showToast({
              title: `订单支付失败`,
              icon:"none"
            })
            console.log(error);
        });
    },
    getOrders:function(state, callback) {
        wx.cloud.callFunction({
            name:"getOrders",
            data:{
                state:state
            }
        }).then(res=>{
            callback(res.result);
        }).catch(error=>{
            wx.showToast({
              title: `获取订单列表失败`,
              icon:"none"
            })
            console.log(error);
        });       
    },
    deleteOrder:function(orderId, callback) {
        wx.cloud.callFunction({
            name:"deleteOrder",
            data:{
                orderId:orderId
            }
        }).then(res=>{
            callback(res.result);
        }).catch(error=>{
            wx.showToast({
              title: "删除订单失败",
              icon:"none"
            })
            console.log(error);
        });   
    }
}
exports.server = server;