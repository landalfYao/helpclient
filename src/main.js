// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import 'iview/dist/styles/iview.css';
import { Menu,MenuGroup,MenuItem,Icon,Timeline ,TimelineItem } from 'iview';
import  VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


Vue.config.productionTip = false
Vue.prototype.yzy = require('./assets/js/yzy')

Vue.component('Menu', Menu);
Vue.component('MenuGroup', MenuGroup);
Vue.component('MenuItem', MenuItem);
Vue.component('Icon', Icon);
Vue.component('Timeline', Timeline);
Vue.component('TimelineItem', TimelineItem);
Vue.use(ElementUI);
Vue.use(VueQuillEditor);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
