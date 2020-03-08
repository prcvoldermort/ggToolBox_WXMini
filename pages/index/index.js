//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    photo: {
      name: '',
    },
    photoSrc: '',
    photoIsLoading: false
  },
  //事件处理函数
  choosePhoto: function() {
    // 选取照片
    let self = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        self.setData({
          photoSrc: tempFilePaths[0]
        })
      },
    })
  },
  submitPhoto: function() {
    
    // var self = this
    // 上传照片的方法
    wx.uploadFile({
      url: 'https://qq.com',
      filePath: this.photoSrc,
      name: 'photo',
      formData: {
        'user': 'test'
      },
      success(res) {
        console.log(res)
        self.photo = res.data
      }
    })
  },
  onLoad: function () {
    
  }
})
