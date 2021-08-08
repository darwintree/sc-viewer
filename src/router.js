import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Album from './views/Album.vue'
import Idol from './views/Idol.vue'
import Campaign from './views/Campaign.vue'
import StoryPage from './views/StoryPage.vue'
import RouterPage from './views/RouterPage.vue'

const routes = [
  {
    path: '/album',
    component: Album
  },
  {
    path: '/album/:idol',
    component: RouterPage
    // component: StoryList
  },
  // {
  //   path: '/album/:idol/:story/:chapter',
  //   component: RouterPage
  // },
  {
    path: '/album/:idol/:story/:chapter',
    component: StoryPage
  },
  {
    path: '/',
    redirect: '/album'
  },
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
