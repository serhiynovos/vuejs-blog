// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import NewPost from './components/NewPost'
import router from './router'
import * as VueMaterial from 'vue-material'
import * as vuefire from 'vuefire'
import * as quill from 'vue-quill'

Vue.use(VueMaterial);
Vue.use(vuefire);
Vue.use(quill);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
    Home,
    NewPost
  },
});