// pages/index/index.js
const server = require('../../utils/server/server').server;
Page({
    onShow: function () {
        this.getTabBar().setData({selectedIndex:0});  
    },
    onLoad:function(){
        this.getCategroy();
        this.getProductList();
    },
    data: {
        categoryData:[],
        productList:[],
        offset:0,
        limit:10,
        isEnd:false,
        currentCid:"0"
    },
    onReachBottom:function() {
        console.log(this.data.isEnd);
        if (!this.data.isEnd) {
            this.getProductList();
        }
    },  
    toSearch:function(event) {
        let key = event.detail;
        if (key.length == 0) {
            wx.showToast({
              title: '请输入搜索内容',
              icon:'none'
            });
            return;
        }
        console.log(`搜索-${event.detail}`);
        
        wx.navigateTo({
          url: `/pages/search/search?key=${key}`,
        })
        this.selectComponent('.search-bar').clear();
    },
    changeItem:function(event) {
        console.log(`切换分类-${event.detail.item.title}-${event.detail.item.cid}`);
        this.setData({
            currentCid:event.detail.item.cid,
            offset:0,
            productList:[],
            isEnd:false
        });
        this.getProductList();
        
    },
    toProductDetail:function(event) {
        console.log(`查看商品详情-${event.detail.item.name}`);
        wx.navigateTo({
          url: '../product/product?gid=' + event.detail.item.gid,
        })
    },
    getCategroy:function() {
        server.getHotCategory(res=>{
            this.setData({
                categoryData:res
            });
        });
    },
    getProductList:function() {
        server.getProductList(this.data.offset,this.data.limit, this.data.currentCid,res=>{
            let isEnd = false;
            console.log(res.length);
            if (res.length < this.data.limit) {
                isEnd = true;
            }
            this.setData({
                productList:this.data.productList.concat(res),
                offset:this.data.offset + res.length,
                isEnd:isEnd
            });
        });
    }
})