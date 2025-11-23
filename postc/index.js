$(function () {
  showLoading()
  if (isDebug) {
    // addFloatBtn(reloadPage, baseUrl + '/app_base/assets/img/reload.png')
  }


  new Vue({
    el: '#vue_id',
    components: {
      'gp-logo': GpLogo,
      'gallery': Gallery,
    },
    data: {
      version: 'v2.0.0',
      hideStore: true,
      storeList: [],
      isEn: false,
    },
    computed: {
      galleryList() {
        return [
          'assets/img/intro/' + (this.isEn ? 'en' : 'zh') + '/1.png',
          'assets/img/intro/' + (this.isEn ? 'en' : 'zh') + '/2.png',
          'assets/img/intro/' + (this.isEn ? 'en' : 'zh') + '/3.png',
          'assets/img/intro/' + (this.isEn ? 'en' : 'zh') + '/4.png'
        ]
      },
      dlVisible() {
        return !this.hideStore && this.storeList.filter(tmp => tmp.visible).length > 0
      },
      name() {
        return this.isEn ? 'Post Creator' : '图创'
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