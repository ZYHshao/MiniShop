// pages/shopping/shopping.js
const server = require('../../utils/server/server').server;
Page({
    onShow: function () {
        this.getTabBar().setData({selectedIndex:2});  
        this.requestData();
    },
    data: {
        datas:[],
        total:0
    },
    requestData:function() {
        server.getCarInfo(res=>{
            let count = 0;
            res.forEach(v=>{
                count += Number(v.detail.price);
            });
            this.setData({
                datas:res,
                total:count
            });
        });
    },
    goHome:function() {
        wx.switchTab({
          url: '/pages/index/index',
        })
    },
    goDetail:function(event) {
        let index = Number(event.currentTarget.dataset.index);
        wx.navigateTo({
          url: `../product/product?gid=${this.data.datas[index].gid}`,
        })
    },
    delete:function(event) {
        let index = Number(event.currentTarget.dataset.index);
        server.deleteCar(this.data.datas[index].gid,res=>{
            wx.showToast({
              title: '删除成功',
              icon:"none"
            });
            this.requestData();
        });
    },
    toOrder:function() {
        let gidArray = [];
        this.data.datas.forEach(v=>{
            gidArray.push(v.gid);
        });
        server.createOrder(gidArray,(res)=>{
            // 跳转订单详情
            console.log("创建订单成功", res);
            wx.navigateTo({
              url: '../orderDetail/orderDetail?orderId=' + res._id,
            });
            // 清空购物车
            gidArray.forEach(v=>{
                server.deleteCar(v,()=>{});
            })
        })
    }
})