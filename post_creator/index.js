$(function () {
  showLoading()
  if (isDebug) {
    // addFloatBtn(reloadPage, baseUrl + '/app_base/assets/img/reload.png')
  }


  new Vue({
    el: '#vue_id',
    components: {},
    data: {
      store: {
        hw: {
          visible: false, // 是否显示
          ok: false, // 是否审核通过
          url: '' // 下载地址
        },
        bd: {
          visible: false,
          ok: false,
          url: ''
        },
        gp: {
          visible: false,
          ok: false,
          url: ''
        },
      },
      isEn: false,
    },
    computed: {
      dlVisible() {
        return this.store.hw.visible || this.store.bd.visible || this.store.gp.visible
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
            break
          case 1:
            // 百度网盘
            break
          case 2:
            // 华为
            break
        }
      },
      clickLang() {
        this.isEn = !this.isEn
      },
      clickPolicy() {
        window.open('./privacy/index.html?lang=' + (this.isEn ? 'en' : 'zh'), '_blank')
      }
    },
    mounted() {
      hideLoading()
      this.isEn = parseGetParam('lang') === 'en'
    }
  })
})