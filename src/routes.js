import home from './components/home.vue'
import Infomation from './components/Infomation.vue'
import A from './components/A.vue'
import B from './components/B.vue'
import C from './components/C.vue'

export const routes = [
  // path はルートパスからのアドレス
  // component は import したコンポーネントの名称
  {
    path: '/',
    component: home
  },
  {
    path: '/Infomation',
    component: Infomation
  },
  {
    path: '/a',
    component: A
  },
  {
    path: '/b',
    component: B
  },
  {
    path: '/c',
    component: C
  },
]