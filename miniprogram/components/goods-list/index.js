// components/goods-list/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        items:{
            type:Array,
            value:[{
                name:"商品名称",
                img:"",
                gid:"",
                cid:"0",
                cname:"分类",
                price:"0.0",
                discount:"1",
                saleCount:100
            },{
                name:"商品名称",
                img:"",
                gid:"",
                cid:"0",
                cname:"分类",
                price:"0.0",
                discount:"1",
                saleCount:100
            }]
        },
        emptyText:{
            type:String,
            value:"暂无数据"
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        touchItem:function(event) {
            let index = Number(event.currentTarget.dataset.index);
            let item = this.data.items[index];
            this.triggerEvent("tapItem", {index:index, item:item});
        }
    }
})
