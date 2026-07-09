import type {ErrorBag, Errors, VisitOptions} from '@inertiajs/core'

/* Inertia */

export interface PageProps {
  [key: string]: unknown
  context: {
    adult_hub_url: string
    base_domain: string
    environment: string
    is_youth_domain: boolean
    youth_hub_url: string
  }
  deferred?: Record<string, VisitOptions['only']>
  errors: Errors & ErrorBag
}
