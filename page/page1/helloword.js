var common = require('../common.js')


Page({
    data:{
        msg:"测试数据",
        imgUrls: [
            
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://wx4.sinaimg.cn/mw690/0060lm7Tly1fxorezzqmqj31hc0u0gw9.jpg',
            'http://wx3.sinaimg.cn/mw690/0060lm7Tly1fxorexx03sj31hc0u0b29.jpg'
          ],
          indicatorDots: false,
          autoplay: true,
    
          interval: 5000,
          duration: 1000,
        array:[{text:'init data'}],
        object:{
            text:'object data'
        }
    },

    helloForMe: function(){
        common.sayHello('Zhangsnke');
    },

    changeIndicatorDots: function(e) {
        this.setData({
          indicatorDots: !this.data.indicatorDots
        })
      },
      changeAutoplay: function(e) {
        this.setData({
          autoplay: !this.data.autoplay
        })
      },
      intervalChange: function(e) {
        this.setData({
          interval: e.detail.value
        })
      },
      durationChange: function(e) {
        this.setData({
          duration: e.detail.value
        })
      }
     ,
     viewTap: function(e){
         console.log("view Tap");
     },
     changeData: function(e){
         this.setData({
             msg: '值改变'
         });
     },
     changeItemData: function(){
         this.setData({
             'object.text':'change object data'
         });
     },
    toInfo:function(){
        wx.navigateTo({
            url: 'info/info?param=1&aflag=1',
            success: function(res){
                console.log(res);
                // success
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })
    },
    onLoad:function(options){
        // 生命周期函数--监听页面加载
       
    },
    onReady:function(){
        // 生命周期函数--监听页面初次渲染完成
       
    },
    onShow:function(){
        // 生命周期函数--监听页面显示
       
    },
    onHide:function(){
        // 生命周期函数--监听页面隐藏
        console.log("===========================>>>helloword页面隐藏（onHide）");
        
    },
    onUnload:function(){
        // 生命周期函数--监听页面卸载
        
    },
    onPullDownRefresh: function() {
        // 页面相关事件处理函数--监听用户下拉动作
       
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
    
    },
    onShareAppMessage: function() {
        // 用户点击右上角分享
        return {
          title: 'title', // 分享标题
          desc: 'desc', // 分享描述
          path: 'path' // 分享路径
        }
    }
})