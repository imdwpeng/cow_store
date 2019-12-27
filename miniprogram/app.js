const WXAPI = require('apifm-wxapi')
const CONFIG = require('config.js')
const AUTH = require('utils/auth')
App({
  onLaunch: function() {
    WXAPI.init(CONFIG.subDomain) // 从根目录的 config.js 文件中读取
  },
  onShow () {
  },
  globalData: {                
  }
})