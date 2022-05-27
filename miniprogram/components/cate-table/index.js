// components/cate-table/index.js
Component({
    properties: {
        items:{
            type:Array,
            value:[]
        },
        index:{
            type:Number,
            value:0
        }
    },
    lifetimes:{
        attached:function() {
            this.setData({
                selectedIndex:this.data.index
            });
        }
    },
    data: {
        selectedIndex:0
    },
    methods: {
        tapLeftItem:function(event) {
            let index = Number(event.currentTarget.dataset.index);
            this.setData({
                selectedIndex:index
            });
            this.triggerEvent("tapLeftItem",{index:index, item:this.data.items[index]});
        },
        tapItem:function(event) {
            let index = Number(event.currentTarget.dataset.index);
            this.triggerEvent("tapItem",{item:this.data.items[this.data.selectedIndex].cates[index]});
        }
    }
})
