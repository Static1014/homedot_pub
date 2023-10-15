$(function () {
  showLoading()
  if (isDebug) {
    // addFloatBtn(reloadPage, baseUrl + '/app_base/assets/img/reload.png')
  }


  new Vue({
    el: '#vue_id',
    components: {},
    data: {
      name: "相思",
      author: "王维",
      poem: "&emsp;红豆生南国，<br>&emsp;春来发几枝。<br>&emsp;愿君多采撷，<br>&emsp;此物最相思。",
      poem_en: "Red Beans<br>" +
        "<br>" +
        "The green vine climbs the ancient tree,<br>" +
        "Red beans grow in clusters.<br>" +
        "But we who share this love<br>" +
        "Cannot be together.<br>" +
        "<br>" +
        "The flower's color is beautiful,<br>" +
        "Yet its time is short.<br>" +
        "Our passion burns intensely,<br>" +
        "But it is bound by fate.<br>" +
        "<br>" +
        "Though we may wish to pluck the beans,<br>" +
        "They are too high to reach.<br>" +
        "Though we may long for a reunion,<br>" +
        "We are kept apart.<br>" +
        "<br>" +
        "The red beans symbolize our love,<br>" +
        "Torn between joy and sorrow.<br>" +
        "We are like the vine and tree,<br>" +
        "Destined to be apart.<br>" +
        "<br>" +
        "In vain we gaze at each other,<br>" +
        "Yearning for a future reunion.<br>" +
        "But for now, we are like red beans<br>" +
        "Growing on separate branches.",
      // poem_jp: "相思<br>" +
      //   "<br>" +
      //   "遠い山と川　白い雲と霧<br>" +
      //   "春の風に舞う　花の香り<br>" +
      //   "別れた日に　胸に秘めて<br>" +
      //   "君を思いながら　月夜を仰ぐ<br>" +
      //   "<br>" +
      //   "遠い日に　別れの涙<br>" +
      //   "夢に君を　願い続け<br>" +
      //   "逢いたい願い　積み重ねて<br>" +
      //   "胸に抱く　相思の情<br>" +
      //   "<br>" +
      //   "果てしない山と川　広がる空<br>" +
      //   "君の声　君の笑顔<br>" +
      //   "時を超えて　遠くへと<br>" +
      //   "心は共に　君と共に",
    },
    computed: {},
    methods: {},
    mounted() {
      hideLoading()
    }
  })
})