import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import NewPost from 'components/NewPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/post/add',
      name: 'NewPost',
      component: NewPost
    }
  ]
})
