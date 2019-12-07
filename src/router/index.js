import Vue from 'vue'
import VueRouter from 'vue-router'
import sliderPath from './sliderPath'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            meta: {
                name: '首页',
                auth: false
            },
            component: () => import('../views/home.vue'),
            children: sliderPath
        }
    ]
})

export default router;