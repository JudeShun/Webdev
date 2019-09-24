// import AUTH from '../services/auth'
// import { resolve } from 'dns'

let beforeEnter = (to, from, next) => {
    AUTH.currentPath = to.path
    next()
}

var devRoutes = []
let app = require('./app.js')
devRoutes = devRoutes.concat(app.default.routes)
for(let x = 0; x < devRoutes.length; x++){
    devRoutes[x]['beforeEnter'] = beforeEnter
}
// to have a default route
let routes = [
    {
        path: '/',
        name: 'home',
        component: resolve => require('../modules/basic/Header.vue'), resolve,
        beforeEnter: beforeEnter
    }
]