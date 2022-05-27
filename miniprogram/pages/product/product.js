// pages/product/product.js
const server = require('../../utils/server/server').server;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        gid:"",
        product:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.data.gid = options.gid;
    },
    onShow() {
        this.getProductDetail();
    },

    getProductDetail() {
        server.getProductDetail(this.data.gid, res=>{
            console.log(res);
            wx.setNavigationBarTitle({
              title: res.name,
            })
            this.setData({
                product:res ?? {}
            });
        });       
    },

    buy() {
        server.createOrder([this.data.gid],(res)=>{
            // 跳转订单详情
            console.log("创建订单成功", res);
            wx.navigateTo({
              url: '../orderDetail/orderDetail?orderId=' + res._id,
            });
        })
    },  
    addCar() {
       server.addToCar(this.data.gid,()=>{
           wx.showToast({
             title: '添加成功',
             icon:"none"
           })
       })
    },
    goCar() {
        wx.switchTab({
          url: '/pages/shopping/shopping',
        })
    }
})