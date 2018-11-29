var common = require('../../common.js')
Page({
    data:{
        msg:'信息页面2',
        array:[1,2,3,4],
        sz:{index:0,name:'张三',age:15}
            
        
    
    
    },
    toshow: function(){
        common.sayHello('Zhangsnke');
    },
    test: function(e){
        console.log(e);
    }
})