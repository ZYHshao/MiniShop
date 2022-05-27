// pages/orderDetail/orderDetail.js
const server = require('../../utils/server/server').server;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderId:"",
        orderDetail:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.data.orderId = options.orderId;
        this.requestData();
    },

    goProduct(event) {
        let index = Number(event.currentTarget.dataset.index);
        wx.navigateTo({
            url: `../product/product?gid=${this.data.orderDetail.gArray[index].gid}`,
        })
    },

    requestData() {
        server.orderDetail(this.data.orderId, res => {
            console.log(res);
            this.setData({
                orderDetail:res
            });
        });
    },
    pay() {
        server.pay(this.data.orderId, "用户选择的默认收货地址", ()=>{
            wx.showToast({
              title: '支付成功',
              icon:"none"
            });
            this.requestData();
        })
    }
})