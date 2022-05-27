// pages/search/search.js
const server = require('../../utils/server/server').server;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        productList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.data.key = options.key;
        wx.setNavigationBarTitle({
          title: `与'${options.key}'相关的商品`,
        })
    },

    onShow(){
        this.search();
    },
    toProductDetail:function(event) {
        console.log(`查看商品详情-${event.detail.item.name}`);
        wx.navigateTo({
            url: '../product/product?gid=' + event.detail.item.gid,
        })
    },
    search:function() {
        server.searchProduct(this.data.key, res=>{
            this.setData({
                productList:res
            });
        });
    }
})