$(function () {
  showLoading()
  if (isDebug) {
    // addFloatBtn(reloadPage, baseUrl + '/app_base/assets/img/reload.png')
  }


  new Vue({
    el: '#vue_id',
    components: {},
    data: {
      version: 'v1.0.0',
      store: {
        hw: {
          visible: false, // 是否显示
          ok: false, // 是否审核通过
          url: '' // 下载地址
        },
        bd: {
          visible: false,
          ok: true,
          url: 'https://pan.baidu.com/s/1ngEfS0UHKfOGbzMIjxeWgw?pwd=d8aq'
        },
        gp: {
          visible: false,
          ok: false,
          url: ''
        },
        server: {
          visible: false,
          ok: true,
          url: './apk/pc_1.0.0(1)_23.10.17.apk'
        }
      },
      isEn: false,
    },
    computed: {
      dlVisible() {
        return this.store.hw.visible || this.store.bd.visible || this.store.gp.visible || this.store.server.visible
      },
      name() {
        return this.isEn ? 'Post Creator' : '图创'
      },
      author() {
        return this.isEn ?
          "<span>Author：Xiong Jian&emsp;Email：<a href='mailto:420048248@qq.com'>420048248@qq.com</a></span>" +
          "&emsp;<a id='ga' href='https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12011102001541' target='_blank'><img src='../app_base/assets/img/ic_beian.png' alt='备案'/>津公网安备 12011102001541号</a>" +
          "&emsp;<a href='https://beian.miit.gov.cn' target='_blank'>津ICP备2023002266号-1</a>"
          :
          "<span>主办单位：熊健&emsp;邮箱：<a href='mailto:420048248@qq.com'>420048248@qq.com</a></span>" +
          "&emsp;<a id='ga' href='https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12011102001541' target='_blank'><img src='../app_base/assets/img/ic_beian.png' alt='备案'/>津公网安备 12011102001541号</a>" +
          "&emsp;<a href='https://beian.miit.gov.cn' target='_blank'>津ICP备2023002266号-1</a>";
      }
    },
    methods: {
      clickDownload(index) {
        switch (index) {
          case 0:
            // google play
            this.openLink(this.store.gp.url)
            break
          case 1:
            // 百度网盘
            this.openLink(this.store.bd.url)
            break
          case 2:
            // 华为
            this.openLink(this.store.hw.url)
            break
          case 3:
            // 华为
            this.openLink(this.store.server.url)
            break
        }
      },
      openLink(url) {
        window.open(url, '_blank')
      },
      clickLang() {
        this.isEn = !this.isEn
      },
      clickPolicy() {
        this.openLink('./privacy/index.html?lang=' + (this.isEn ? 'en' : 'zh'))
      }
    },
    mounted() {
      hideLoading()
      this.isEn = parseGetParam('lang') === 'en'
    }
  })
})