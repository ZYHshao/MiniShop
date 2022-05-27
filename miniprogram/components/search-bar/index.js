// components/search-bar/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title:{
            type:String,
            value:"标题"
        },
        placeholder:{
            type:String,
            value:"请输入..."
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        value:""
    },

    /**
     * 组件的方法列表
     */
    methods: {
        btnTap:function() {
            this.triggerEvent('searchBtnTap', this.data.value);
        },
        input:function(event) {
            this.setData({
                value:event.detail.value
            });
        },
        clear:function() {
            this.setData({
                value:""
            });
        }
    }
})
