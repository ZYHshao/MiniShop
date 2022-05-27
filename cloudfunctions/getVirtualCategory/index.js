// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    return [
        {name:"热门分类",cates:[{cid:'0', title:'图书'}]},
        {name:"精品推荐",cates:[{cid:'0', title:'图书'},{cid:'1', title:'家电'},{cid:'2',title:'食品'},{cid:'6',title:'百货'}]},
        {name:"教育图书",cates:[{cid:'0', title:'图书'}]},
        {name:"运动衣着",cates:[]},
        {name:"最近上新",cates:[]},
        {name:"爆品折扣",cates:[]},
        {name:"家用电器",cates:[]},
        {name:"汽车生活",cates:[]},
        {name:"数码办公",cates:[]},
        {name:"内衣配饰",cates:[]},
        {name:"生鲜水果",cates:[]},
        {name:"美妆护肤",cates:[]},
    ]
}