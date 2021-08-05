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
  NAvatar
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
    NAvatar
  ]
})

app.use(router)
app.use(store)
app.use(naive)
app.mount('#app')