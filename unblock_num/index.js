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
      hideStore: false,
      storeList: [
        {
          visible: false,
          name: '华为应用市场',
          nameEn: 'Huawei AppGallery',
          img: '../app_base/assets/img/store/huawei.png',
          ok: true,
          url: ''
        },
        {
          visible: false,
          name: '腾讯应用宝',
          nameEn: 'Tencent App Gallery',
          img: '../app_base/assets/img/store/yyb.svg',
          ok: true,
          url: ''
        },
        {
          visible: true, // 是否显示
          name: 'Google Play',
          nameEn: 'Google Play',
          isSvg: true,
          img: '',
          ok: false, // 是否审核通过
          url: 'https://play.google.com/store/apps/details?id=com.static4u.unblock_num' // 下载地址
        },
        {
          visible: false,
          name: '百度网盘',
          nameEn: 'Baidu Cloud Disk',
          img: '../app_base/assets/img/store/bd_cloud.png',
          ok: true,
          url: ''
        },
        {
          visible: false,
          name: '123云盘',
          nameEn: '123 Cloud Disk',
          img: '../app_base/assets/img/store/123.ico',
          ok: true,
          url: ''
        },
        {
          visible: false,
          name: '普通下载',
          nameEn: 'Web Download',
          img: 'assets/img/logo_192.png',
          ok: true,
          url: ''
        }
      ],
      isEn: false,
    },
    computed: {
      dlVisible() {
        return !this.hideStore && this.storeList.filter(tmp => tmp.visible).length > 0
      },
      name() {
        return this.isEn ? 'Unblock Numbers' : '数字华容道'
      },
    },
    methods: {
      clickDownload(item) {
        if (isEmptyOrNull(item.url)) {
          toast(this.isEn ? 'Coming soon' : '敬请期待')
          return
        }
        this.openLink(item.url);
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