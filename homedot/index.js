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
      poemList: [
        {
          'name': '三五七言 · 秋风词',
          'author': '李白',
          'content': [
            "秋风清，秋月明，",
            "落叶聚还散，寒鸦栖复惊。",
            "相思相见知何日？此时此夜难为情！",
            "入我相思门，知我相思苦，",
            "长相思兮长相忆，短相思兮无穷极，",
            "早知如此绊人心，何如当初莫相识。"
          ],
        },
        {
          'name': '新添声杨柳枝词二首 · 其二',
          'author': '温庭筠',
          'content': [
            "井底点灯深烛伊，",
            "共郎长行莫围棋。",
            "玲珑骰子安红豆，",
            "入骨相思知不知？",
          ],
        },
        {
          'name': '玉楼春 · 春恨',
          'author': '晏殊',
          'content': [
            "绿杨芳草长亭路，年少抛人容易去。",
            "楼头残梦五更钟，花底离愁三月雨。",
            "无情不似多情苦，一寸还成千万缕。",
            "天涯地角有穷时，只有相思无尽处。",
          ],
        },
        {
          'name': '无题 · 重帏深下莫愁堂',
          'author': '李商隐',
          'content': [
            "重帏深下莫愁堂，卧后清宵细细长。",
            "神女生涯原是梦，小姑居处本无郎。",
            "风波不信菱枝弱，月露谁教桂叶香。",
            "直道相思了无益，未妨惆怅是清狂。",
          ],
        }
      ]
    },
    computed: {},
    methods: {},
    mounted() {
      hideLoading()
    }
  })
})