import home from './components/home.vue'
import Infomation from './components/Infomation.vue'
import Skills from './components/Skills.vue'
import A from './components/A.vue'
import B from './components/B.vue'
import C from './components/C.vue'
import Top from './components/Top.vue'

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
    path: '/Skills',
    component: Skills
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
  {
    path: '/Top',
    component: Top
  },
]