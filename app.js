App({
    //全局数据设置在App()中
    onLaunch: function () {
        var LaunchOption = wx.getLaunchOptionsSync();
        console.log(LaunchOption);
    },
    onShow: function () {
        //从后台返回到页面的时候返回当前页面信息
       var curPages =  getCurrentPages();
       console.log(curPages);
    },
    onHide: function () {
        
    },
    onError: function (msg) {
        
    },
    onPageNotFound:function(res){
        wx.switchTab({
            url: 'page/logs/log',
            success: function(res){
                // success
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })
    }
})