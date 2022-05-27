// pages/category/category.js
const server = require('../../utils/server/server').server;
Page({
    onShow: function () {
        this.getTabBar().setData({selectedIndex:1});  
    },
    data:{
        categorys:[]
    },
    onLoad:function() {
        this.getCategorys();
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
    toCategoryList:function(event) {
        console.log(event.detail.item);
        wx.navigateTo({
            url: `/pages/search/search?key=${event.detail.item.title}`,
          })
    },
    getCategorys:function() {
        server.getVirtualCategory(res=>{
            this.setData({
                categorys:res
            });
        });
    }
})