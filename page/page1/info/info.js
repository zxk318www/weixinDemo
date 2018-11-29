Page({
    data:{
        id:0,
        msg:'信息数据',
        aflag:true,
        staffA:{name:'张三',age:'18'},
        staffB:{name:"李四",age:'19'},
        a:5,
        b:6,
        c:7,
        d:1,
        array:[{
            message:'消息1'
        },{
            message:'消息2'
        }],
        objectArray: [
            {id: 2, unique: 'unique_2'},
            {id: 1, unique: 'unique_1'},
            {id: 0, unique: 'unique_0'},
          ],
          numberArray: [1, 2, 3]
    },
   
    onLoad:function(options){
        // 生命周期函数--监听页面加载
        console.log("=========================>>>info页面加载")
        console.log(options.aflag);
       if(options.aflag=='2'){
            console.log("重定向");
            this.setData({
                aflag:!this.data.aflag
            })
       }
    
    },
    onReady:function(){
        // 生命周期函数--监听页面初次渲染完成
      console.log("=========================>>>info页面渲染完成")
      
    },
    onShow:function(){
        // 生命周期函数--监听页面显示
        console.log("=========================>>>info页面显示")
    },
    onHide:function(){
        // 生命周期函数--监听页面隐藏
      
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
    },
    switch: function(e) {
        const length = this.data.objectArray.length
        for (let i = 0; i < length; ++i) {
          const x = Math.floor(Math.random() * length)
          const y = Math.floor(Math.random() * length)
          const temp = this.data.objectArray[x]
          this.data.objectArray[x] = this.data.objectArray[y]
          this.data.objectArray[y] = temp
        }
        this.setData({
          objectArray: this.data.objectArray
        })
      },
      addToFront: function(e) {
        const length = this.data.objectArray.length
        this.data.objectArray = [{id: length, unique: 'unique_' + length}].concat(this.data.objectArray)
        this.setData({
          objectArray: this.data.objectArray
        })
      },
      addNumberToFront: function(e){
        this.data.numberArray = [ this.data.numberArray.length + 1 ].concat(this.data.numberArray)
        this.setData({
          numberArray: this.data.numberArray
        })
      }
})