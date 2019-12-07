export default [
    {
        path: '/goods',
        name: 'goods',
        meta: {
            name: '商品管理',
            icon: 'el-icon-s-goods',
            auth: false
        },
        component: () => import('../views/common/abstract.vue'),
        children: [
            {
                path: 'list',
                name: 'goodsList',
                meta: {
                    name: '商品列表',
                    auth: false
                },
                component: () => import('../views/goods/goods-list.vue')
            }
        ]
    },
    {
        path: '/orders',
        name: 'orders',
        meta: {
            name: '订单管理',
            auth: false,
            icon: 'el-icon-s-order'
        },
        component: () => import('../views/common/abstract.vue'),
        children: [
            {
                path: 'orders',
                name: 'orderList',
                meta: {
                    name: '订单列表',
                    auth: false
                },
                component: () => import('../views/orders/order-list.vue')
            }
        ]
    },
    {
        path: '/settings',
        name: 'settings',
        meta: {
            name: '基础设置',
            auth: false,
            icon: 'el-icon-s-tools'
        },
        component: () => import('../views/common/abstract.vue'),
        children: [
            {
                path: 'user',
                name: 'user',
                meta: {
                    name: '个人中心',
                    auth: false
                },
                component: () => import('../views/settings/user.vue')
            }
        ]
    }
]