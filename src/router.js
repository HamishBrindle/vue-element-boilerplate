import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    },
    {
      path: '/parent',
      component: () => import(/* webpackChunkName: "parent" */ '@/views/Parent/index.vue'),
      children: [
        { path: '', name: 'parent', component: () => import(/* webpackChunkName: "parent" */ '@/views/Parent/Default.vue') },
        { path: 'foo', component: () => import(/* webpackChunkName: "parent" */ '@/views/Parent/Foo.vue') },
        { path: 'bar', component: () => import(/* webpackChunkName: "parent" */ '@/views/Parent/Bar.vue') },
      ],
    },
    // {
    //   path: '*',
    //   component: {
    //     template: '<div>Custom 404</div>',
    //   },
    // },
  ],
});
