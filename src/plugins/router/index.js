import { createRouter, createWebHashHistory } from 'vue-router'
import { staticRoutes } from "@/plugins/router/static.js";
import { createDynamicRouter } from './dynamic.js'
import nprogress from "@/utils/nprogress";


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [...staticRoutes],
  strict: false,
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    };
  }
})

// 将 router 实例传递给 createDynamicRouter
router.beforeEach(async (to, from, next) => {
  nprogress.start()
  await createDynamicRouter(router)
  next()
})

router.onError(error => {
  nprogress.done();
  console.warn("路由错误", error.message);
});

router.afterEach((to, from) => {
  nprogress.done();
});

export default function (app) {
  app.use(router)
}
export { router }