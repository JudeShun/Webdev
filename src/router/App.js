import { LayoutPlugin } from "bootstrap-vue";

export default{
    routes:[{
        path:'/login',
        name:'login',
        component: resolve => require(['../modules/basic/LayoutPForm'], resolve),
        meta: {
            tokenRequired:false
        }
        ,
        path:'/register',
        name:'register',
        component: resolve => require(['../modules/basic/LayoutPRegister.vue'], resolve),
        meta: {
            tokenRequired:true
        },
        path:'/forgot', 
        name:'forgot',
        component:reslove =>equire(['../modules/basic/Layoutforgot.vue'], resolve),

    }
   ]
}