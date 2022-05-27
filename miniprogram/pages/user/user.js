// pages/user/user.js
Page({
    onShow: function () {
        this.getTabBar().setData({selectedIndex:3});  
    },
    onLoad: function() {
        // 查看是否授权
        wx.getSetting({
            success:(res) => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                    wx.getUserInfo({
                        success:(res) => {
                            console.log(res.userInfo);
                            this.setData({
                                userInfo:res.userInfo
                            });
                        }
                    })
                }
            }
        });   
    },
    data:{
        userInfo:{}
    },
    userInfo:function(res) {
        console.log(res.detail.userInfo);
        this.setData({
            userInfo:res.detail.userInfo
        });
    },
    goOrders:function(event) {
        let index = event.currentTarget.dataset.index;
        wx.navigateTo({
          url: `../orderList/orderList?state=${index}`,
        })
    }
})