import './index.css'
import {config as fontAwesomeConfig} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {RouterProvider, toast as heroToast, Toast} from '@heroui/react'
import {createInertiaApp, router, type ResolvedComponent} from '@inertiajs/react'
import * as Sentry from '@sentry/react'

fontAwesomeConfig.autoAddCss = false

if (!import.meta.env.SSR) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
      Sentry.browserProfilingIntegration(),
      Sentry.browserTracingIntegration(),
      Sentry.captureConsoleIntegration(),
      Sentry.replayIntegration(),
    ],
    replaysOnErrorSampleRate: 1.0,
    replaysSessionSampleRate: 0.25,
    tracesSampleRate: 0.25,
  })

  router.on('flash', (event) => {
    const {toast} = event.detail.flash

    if (!toast) {
      return
    }

    heroToast(toast.title, {
      description: toast.description,
      timeout: toast.timeout,
      variant: toast.variant,
    })
  })
}

void createInertiaApp({
  progress: {
    color: 'var(--accent)',
  },
  title: (title) => (title.length > 0 ? `${title} - Hosmel Quintana` : 'Hosmel Quintana'),
  resolve: (name) => {
    const pages = import.meta.glob<ResolvedComponent>([
      './pages/**/*.tsx',
      '!./pages/**/_components/**/*.tsx',
    ])
    const page = pages[`./pages/${name}.tsx`]

    if (typeof page === 'undefined') {
      throw new Error(`Page not found: ${name}.`)
    }

    return page()
  },
  strictMode: true,
  withApp: (app) => (
    <RouterProvider navigate={(path, routerOptions) => router.visit(path, routerOptions)}>
      {app}
      <Toast.Provider />
    </RouterProvider>
  ),
})
