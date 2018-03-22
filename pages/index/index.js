//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    baseTitle: '帮舍友找对象|第245期',
    baseIntroduction: '郑重声明：本公众平台是一个严肃的交友平台，为了舍友的幸福，请在投稿前确认舍友单身与否以及推送意愿。已有对象的，严禁恶搞（跪求给单身狗们一条生路~）!推送后，当事人将有权向后台询问发布者信息。另：照片及信息系热心舍友提供，本平台概不承担任何侵权责任哟(❁´◡`❁)*✲ﾟ*',
     
    sudaFamle:[
      {
        image:'/sources/image/test.png',
        info:'这是一个美丽的女孩！！！',        
        thumbup:'0'      
      },
      {
        image: '/sources/image/test.png',
        info: '这是一个美丽的女孩！！！',
        thumbup: '1'
      }

    ],

    iconImage: '/sources/image/icon.png',
    iconText: '赞',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  thumbUpEvent: function() { 
    this.setData({
      iconImage: '/sources/image/icon1.png'
    })
  }
})
