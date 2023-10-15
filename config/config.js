// 全局配置变量-备案信息
const config = {
  author: '熊健',
  authorEn: 'Xiong Jian',
  email: '420048248@qq.com',
  policeUrl: 'https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=', // 公安备案号查询地址
  policeRecordPrefix: '津公网安备 ', // 公安备案号
  homedot: {
    policeNo: '12011102001541', // 公安备案号
    icpNo: '津ICP备2023002266号-1', // icp备案号
  },
  postCreator: {
    policeNo: '12011102001541', // todo 公安备案号
    icpNo: '津ICP备2023002266号-1', // todo icp备案号
  },
}

/**
 * 获取footer html
 * @param project config中的项目对象
 * @param isEn  是否英文
 * @returns {string} footer html
 */
function getFooterHtml(project, isEn = false) {
  let author = isEn ? 'Owner' : '主办单位'
  let email = isEn ? 'Email' : '邮箱'
  return "<span>" +
    author + "：" + config.author + "&emsp;" +
    email + "：<a href='mailto:" + config.email + "'>" + config.email + "</a>" +
    "</span>" +
    "&emsp;<a id='ga' href='" + config.policeUrl + project.policeNo + "' target='_blank'><img src='../app_base/assets/img/ic_beian.png' alt='备案'/>" + config.policeRecordPrefix + project.policeNo + "号</a>" +
    "&emsp;<a href='https://beian.miit.gov.cn' target='_blank'>" + project.icpNo + "</a>"
}