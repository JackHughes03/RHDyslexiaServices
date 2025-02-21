import { ViteSSG } from 'vite-ssg'
import { createHead as createHeadOld } from '@vueuse/head'
import App from './App.vue'
import { routes } from './router'
import './index.css'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, isClient }) => {
    const head = createHeadOld()
    app.use(head)

    router.beforeEach((to, from, next) => {
      head.push({
        title: to.meta?.title,
        meta: [
          {
            name: 'description',
            content: to.meta?.description
          },
          {
            property: 'og:title',
            content: to.meta?.title
          },
          {
            property: 'og:description',
            content: to.meta?.description
          }
        ]
      })
      next()
    })
  }
)