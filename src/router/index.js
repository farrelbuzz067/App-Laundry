import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Dashboard from '../components/Dashboard.vue'

//PUNYA MEMBER
import IndexMember from '../components/Member/Index.vue'
import DetailMember from '../components/Member/Detail.vue'
import EditMember from '../components/Member/Edit.vue'
import TambahMember from '../components/Member/Tambah.vue'

//PUNYA PAKET
import IndexPaket from '../components/Paket/Index.vue'
import DetailPaket from '../components/Paket/Detail.vue'
import EditPaket from '../components/Paket/Edit.vue'
import TambahPaket from '../components/Paket/Tambah.vue'

//PUNYA TRANSAKSI
import IndexTransaksi from '../components/Transaksi/Index.vue'
import DetailTransaksi from '../components/Transaksi/Detail.vue'
import EditTransaksi from '../components/Transaksi/Edit.vue'
import TambahTransaksi from '../components/Transaksi/Tambah.vue'
import TambahDetailTransaksi from '../components/Transaksi/TambahDetail.vue'

//PUNYA REPORT
import Report from '../components/Report/Index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            requireAuth: true
        }
    },

    // PUNYA FOLDER MEMBER

    {
        path: '/member',
        name: 'indexmember',
        component: IndexMember,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/detail/:id',
        name: 'detailmember',
        component: DetailMember,
    },
    {
        path: '/edit/:id',
        name: 'editmember',
        component: EditMember,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/tambahmember',
        name: 'tambahmember',
        component: TambahMember,
        meta: {
            requireAuth: true
        }
    },
    //PUNYA FOLDER PAKET

    {
        path: '/paket',
        name: 'indexpaket',
        component: IndexPaket,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/detail/:id',
        name: 'detailpaket',
        component: DetailPaket,
    },
    {
        path: '/edit/:id',
        name: 'editpaket',
        component: EditPaket,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/tambahpaket',
        name: 'tambahpaket',
        component: TambahPaket,
        meta: {
            requireAuth: true
        }
    },
    //PUNYA TRANSAKSI
    {
        path: '/transaksi',
        name: 'indextransaksi',
        component: IndexTransaksi,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/edit/:id',
        name: 'edittransaksi',
        component: EditTransaksi,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/tambahtransaksi',
        name: 'tambahtransaksi',
        component: TambahTransaksi,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/detail/:id',
        name: 'detailtransaksi',
        component: DetailTransaksi,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/detail/tambah/:id',
        name: 'tambahdetail',
        component: TambahDetailTransaksi,
        meta: {
            requireAuth: true
        }
    },
    //PUNYA REPORT
    {
        path: '/report',
        name: 'report',
        component: Report,
        meta: {
            requiresAuth: true
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requireAuth)) {
        if (localStorage.getItem('auth')) {
            next()
        } else {
            next('/login')
        }
    }
    next()
})

export default router