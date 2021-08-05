import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Album from './views/Album.vue'
import Idol from './views/Idol.vue'

const routes = [
  {
    path: '/album',
    component: Album
  },
  {
    path: '/album/:idol',
    component: Idol
    // component: StoryList
  },
  // {
  //   path: '/album/:idol/:collection',
  //   component: StoryList
  // },
  // {
  //   path: '/album/:idol/:collection/:story',
  //   component: StoryPage
  // },
  // {
  //   path: '*',
  //   redirect: '/album'
  // },
  {
    path: '/hello',
    component: HelloWorld
  },
]

const router = new createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
