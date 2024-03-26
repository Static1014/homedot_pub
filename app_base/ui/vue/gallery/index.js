/**
 * Gallery组件
 */
let Gallery = {
  name: 'Gallery',
  props: {
    list: {type: Array, default: () => [], required: true},
    imgClass: {type: String}
  },
  template: `
    <div class="gallery-container">
      <div class="gallery-content">
        <img :class="imgClass" :src="tmp" v-for="tmp in list" alt="intro">
      </div>
    </div>`
}