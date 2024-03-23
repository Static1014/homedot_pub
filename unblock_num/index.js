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
          ok: true, // 是否审核通过
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
      promotion: {
        visible: true,
        content: [
          '数字华容道，免费挑战！快来试试吧！',
          '24.3.25-24.3.31，<a href="data/promotion.html" target="_blank">100个免费促销兑换码</a>，先到先得！',
          '锻炼智力，挑战自我！简单规则，无尽乐趣！',
          '快来解锁更多关卡，成为数字解谜高手！'
        ]
      }
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
    watch: {
      isEn: {
        handler(newVal, oldVal) {
          document.title = this.name
        }
      }
    },
    mounted() {
      hideLoading()
      this.isEn = parseGetParam('lang') === 'en'
    }
  })
})