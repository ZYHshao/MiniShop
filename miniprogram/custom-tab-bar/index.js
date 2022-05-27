// custom-tab-bar/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        selectedIndex:0,
        pageList:[
            '/pages/index/index',
            '/pages/category/category',
            '/pages/shopping/shopping',
            '/pages/user/user'
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        switchPage:function(event) {
            let index = Number(event.currentTarget.dataset.index);  
            wx.switchTab({
                url: this.data.pageList[index],
            })
        }
    }
})
