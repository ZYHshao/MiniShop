// components/top-tab-bar/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        items:{
            type:Array,
            value:[{title:"栏目1"},{title:"栏目2"},{title:"栏目3"},{title:"栏目4"},{title:"栏目5"},{title:"栏目6"},{title:"栏目7"},{title:"栏目8"},{title:"栏目9"},{title:"栏目10"},{title:"栏目11"},{title:"栏目12"}]
        },
        selected:{
            type:Number,
            value:0
        }
    },

    lifetimes:{
        ready:function() {
            this.setData({
                currentSelected:this.data.selected,
                anchorID:'id' + this.data.selected
            });
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        currentSelected:0,
        anchorID:'id0'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        tapItem:function(event) {
            let index = Number(event.currentTarget.dataset.index);
            this.setData({
                currentSelected:index,
                anchorID:'id'+index
            });
            this.triggerEvent("changeSelected", {index:index, item:this.data.items[index]});
        }
    }
})
