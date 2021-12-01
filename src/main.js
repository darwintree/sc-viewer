import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  // create naive ui
  create,
  // component
  NButton,
  NSpace,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
  NGrid,
  NGridItem,
  NCard,
  NThing,
  NAvatar,
  NModal,
  NList,
  NListItem,
  NTag,
  NBreadcrumb,
  NBreadcrumbItem,
  NBackTop,
  NTabs,
  NTabPane,
  NImage,
  NUpload
} from 'naive-ui'

const app = createApp(App)
const naive = create({
  components: [
    NButton,
    NSpace,
    NLayout,
    NLayoutContent,
    NLayoutFooter,
    NLayoutHeader,
    NLayoutSider,
    NGrid,
    NGridItem,
    NCard,
    NThing,
    NAvatar,
    NModal,
    NList,
    NListItem,
    NTag,
    NBreadcrumb,
    NBreadcrumbItem,
    NBackTop,
    NTabs,
    NTabPane,
    NImage,
    NUpload
  ]
})

app.use(router)
app.use(store)
app.use(naive)
app.mount('#app')