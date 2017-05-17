import Vue from 'vue'
import Router from 'vue-router'
import Photo from '@/components/photo'
import Hometown from '@/components/hometown'
import Marry from '@/components/marry'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Photo
    },
    {
      path: '/photo',
      component: Photo
    },
    {
      path: '/hometown',
      component: Hometown
    },
    {
      path: '/marry',
      component: Marry
    }
  ]
})
