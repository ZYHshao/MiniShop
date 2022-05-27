// pages/orderList/orderList.js
const server = require('../../utils/server/server').server;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        state:-1,
        orders:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.data.state = options.state;
        console.log(this.data.state);
        this.requestData();
    },

    requestData() {
        server.getOrders(this.data.state, (res)=>{
            console.log(res);
            this.setData({
                orders:res
            });
        })
    },
    goDetail(event) {
        let index = Number(event.currentTarget.dataset.index);
        wx.navigateTo({
          url: '../orderDetail/orderDetail?orderId=' + this.data.orders[index]._id,
        })
    },
    delete(event) {
        let index = Number(event.currentTarget.dataset.index);
        server.deleteOrder(this.data.orders[index]._id, ()=>{
            wx.showToast({
              title: '删除成功',
              icon:"none"
            });
            this.requestData();
        });
    }
})