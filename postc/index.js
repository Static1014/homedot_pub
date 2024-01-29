$(function () {
  showLoading()
  if (isDebug) {
    // addFloatBtn(reloadPage, baseUrl + '/app_base/assets/img/reload.png')
  }


  new Vue({
    el: '#vue_id',
    components: {},
    data: {
      version: 'v2.0.0',
      hideStore: false,
      storeList: [
        {
          visible: true,
          name: '华为应用市场',
          nameEn: 'Huawei AppGallery',
          img: 'assets/img/store/huawei.png',
          ok: true,
          url: 'https://appgallery.huawei.com/app/C109424593'
        },
        {
          visible: true,
          name: '腾讯应用宝',
          nameEn: 'Tencent App Gallery',
          img: 'assets/img/store/yyb.svg',
          ok: true,
          url: 'https://sj.qq.com/appdetail/com.static4u.pic_maker'
        },
        {
          visible: true, // 是否显示
          name: 'Google Play',
          nameEn: 'Google Play',
          isSvg: true,
          img: '',
          ok: true, // 是否审核通过
          url: 'https://play.google.com/store/apps/details?id=com.static4u.pic_maker' // 下载地址
        },
        {
          visible: true,
          name: '百度网盘',
          nameEn: 'Baidu Cloud Disk',
          img: 'assets/img/store/bd_cloud.png',
          ok: true,
          url: 'https://pan.baidu.com/s/1Gzry7b1JUgfLkFMQCkOxHw?pwd=tpr7'
        },
        {
          visible: true,
          name: '123云盘',
          nameEn: '123 Cloud Disk',
          img: 'assets/img/store/123.ico',
          ok: true,
          url: 'https://www.123pan.com/s/4CQmjv-4UdGA.html'
        },
        {
          visible: false,
          name: '普通下载',
          nameEn: 'Web Download',
          img: 'assets/img/logo_192.png',
          ok: true,
          // url: './apk/pc_1.1.1_3_23.10.27.apk'
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