import Vue from 'vue'
import App from './App'
import router from './router'
import './utils/rem'
import './style/index.scss'
import store from './store/index'


Vue.config.productionTip = false

const whiteList = ['/login', '/signup', '/forget', '/authredirect'];

router.beforeEach((to,from,next) => {
  document.title = (to.name || '') + '- vue wap demo';
  next();
  if(store.getters.token){
    if(to.path === '/login'){
      next({
        path:'/message'
      });
    }else{
      next();
    }
  }else{
    if(whiteList.indexOf(to.path) !== -1){
      next()
    }else{
      next('/login');
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template:'<App/>',
  components:{App},
})
