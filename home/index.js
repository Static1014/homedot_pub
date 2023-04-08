$(function () {
  showLoading()
  if (isDebug) {
    // addFloatBtn(reloadPage, baseUrl + '/app_base/assets/img/reload.png')
  }


  new Vue({
    el: '#vue_id',
    components: {},
    data: {
      name: "红豆",
      author:"王维",
      poem: "&emsp;红豆生南国，<br>&emsp;春来发几枝。<br>&emsp;愿君多采撷，<br>&emsp;此物最相思。"
    },
    computed: {},
    methods: {},
    mounted() {
      hideLoading()
    }
  })
})