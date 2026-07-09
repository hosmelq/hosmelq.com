import {
  faGithub,
  faLinkedin,
  faXTwitter,
  type IconDefinition,
} from '@fortawesome/free-brands-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Head} from '@inertiajs/react'

interface LinkItem {
  title: string
  subtitle: string
  description: string
  href: string
}

interface SocialLink {
  label: string
  href: string
  icon: IconDefinition
}

const experience: LinkItem[] = [
  {
    description:
      'Build tools for Etsy sellers to optimize listings, track trends, and improve shop performance through reliable full-stack product development.',
    href: 'https://erank.com',
    subtitle: '2024 - Present',
    title: 'eRank',
  },
  {
    description:
      'Built user-focused web applications across front-end and back-end, with a strong focus on quality, performance optimization, and reliable project delivery.',
    href: 'https://penguinprotocols.com',
    subtitle: 'Nov 2011 - May 2013',
    title: 'IBIS Servicios',
  },
  {
    description:
      'Delivered custom solutions for clients including Sears Mexico and Decompras, managed Linux servers, and solved complex technical problems across infrastructure and application layers.',
    href: 'https://iliux.com',
    subtitle: 'May 2013 - Jan 2016',
    title: 'Iliux',
  },
  {
    description:
      'Led a team delivering end-to-end custom software solutions for clients. Built scalable full-stack apps with Next.js, Vue.js, Laravel, React, React Native, GraphQL, MySQL, and Redis.',
    href: 'https://getnerdify.com',
    subtitle: 'Jul 2016 - Jul 2023',
    title: 'Nerdify',
  },
  {
    description:
      'Led migration from plain PHP to Laravel, introduced React and GraphQL, and improved platform performance and maintainability while coordinating delivery with the development team.',
    href: 'https://pickuphub.net',
    subtitle: 'Jan 2016 - May 2017',
    title: 'PickupHub',
  },
]

const oss: LinkItem[] = [
  {
    description: 'Build imgproxy URLs in PHP with optional encryption and signing.',
    href: 'https://github.com/hosmelq/imgproxy-php',
    subtitle: 'PHP',
    title: 'imgproxy-php',
  },
  {
    description: 'Add structured, queryable audit logs to Laravel apps.',
    href: 'https://github.com/hosmelq/laravel-audit-logs',
    subtitle: 'PHP',
    title: 'Laravel Audit Logs',
  },
  {
    description: 'Laravel integration for building and signing imgproxy URLs.',
    href: 'https://github.com/hosmelq/laravel-imgproxy',
    subtitle: 'PHP',
    title: 'Laravel Imgproxy',
  },
  {
    description: 'Per-model preferences for Laravel with defaults and validation.',
    href: 'https://github.com/hosmelq/laravel-model-preferences',
    subtitle: 'PHP',
    title: 'Laravel Model Preferences',
  },
  {
    description: 'Generate Open Graph images in Laravel using configurable templates.',
    href: 'https://github.com/hosmelq/laravel-open-graph-image',
    subtitle: 'PHP',
    title: 'Laravel Open Graph Image',
  },
  {
    description: 'Monitor and visualize Laravel scheduler activity with Laravel Pulse.',
    href: 'https://github.com/hosmelq/laravel-pulse-schedule',
    subtitle: 'PHP',
    title: 'Laravel Pulse Schedule',
  },
  {
    description: 'Handle person names in your PHP applications with elegant formatting options.',
    href: 'https://github.com/hosmelq/name-of-person',
    subtitle: 'PHP',
    title: 'Name of Person',
  },
  {
    description:
      'Parse search queries into structured data with field searches, boolean logic, ranges, lists, and adapters.',
    href: 'https://github.com/hosmelq/search-syntax-parser',
    subtitle: 'PHP',
    title: 'Search Syntax Parser',
  },
  {
    description: 'Consume Server-Sent Events (SSE) with PHP.',
    href: 'https://github.com/hosmelq/sse-php',
    subtitle: 'PHP',
    title: 'sse-php',
  },
  {
    description: 'Add Server-Sent Events (SSE) support to Saloon-based API clients.',
    href: 'https://github.com/hosmelq/sse-saloon',
    subtitle: 'PHP',
    title: 'sse-saloon',
  },
]

const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/hosmelq',
    icon: faGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hosmelq',
    icon: faLinkedin,
  },
  {
    label: 'X',
    href: 'https://x.com/hosmelq',
    icon: faXTwitter,
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Hosmel Quintana</title>
        <meta
          head-key="description"
          name="description"
          content="I help startups and teams ship great products through code."
        />
        <link rel="canonical" href="https://hosmelq.com/" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <div className="mx-auto grid min-h-screen max-w-350 grid-cols-1 grid-rows-[auto_auto_1fr] border-x border-border-secondary lg:grid-cols-[340px_1rem_1fr]">
        <aside className="flex flex-col justify-between gap-y-4 p-8 md:p-10 lg:sticky lg:top-0 lg:max-h-screen">
          <div className="flex flex-col gap-y-4">
            <h1 className="font-instrument text-6xl">
              Hosmel
              <br />
              Quintana
            </h1>

            <p className="text-sm leading-relaxed text-muted">
              Software engineer focused on building clean, reliable web applications.
            </p>

            <a
              className="text-sm text-muted transition-colors hover:text-foreground"
              href="mailto:hi@hosmelq.com"
            >
              hi@hosmelq.com
            </a>
          </div>

          <footer className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  aria-label={link.label}
                  className="text-muted transition-colors hover:text-foreground"
                  href={link.href}
                  key={link.label}
                >
                  <FontAwesomeIcon className="block size-5" icon={link.icon} />
                </a>
              ))}
            </div>
            <small className="text-xs text-muted">&copy; 2026</small>
          </footer>
        </aside>

        <div className="stripe-divider h-4 text-separator-secondary lg:h-auto" />

        <main>
          <Section items={experience} title="Experience" />
          <Section items={oss} title="OSS" />
        </main>
      </div>
    </>
  )
}

function Section({items, title}: {items: LinkItem[]; title: string}) {
  return (
    <section>
      <h2 className="p-8 font-instrument text-5xl md:p-10">{title}</h2>
      <ul className="divide-y divide-dashed divide-separator-secondary border-y border-dashed border-y-separator-secondary xl:grid xl:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)_auto]">
        {items.map((item) => (
          <LinkRow item={item} key={item.href} />
        ))}
      </ul>
    </section>
  )
}

function LinkRow({item}: {item: LinkItem}) {
  return (
    <li className="group relative xl:col-span-3 xl:grid xl:grid-cols-subgrid">
      <div className="absolute start-full -top-px -bottom-px z-10 hidden w-px border-e border-t border-b border-border-secondary transition-all group-hover:w-4 group-hover:bg-surface-secondary xl:block" />
      <a
        className="flex flex-col gap-y-4 p-8 transition-colors group-hover:bg-surface-secondary xl:col-span-3 xl:grid xl:grid-cols-subgrid xl:items-start xl:gap-x-12 xl:px-10 xl:py-16"
        href={item.href}
        target="_blank"
      >
        <div className="flex flex-col gap-y-4 xl:col-span-2 xl:grid xl:grid-cols-subgrid xl:items-start xl:gap-x-12">
          <div className="flex flex-col gap-y-2">
            <h3 className="font-instrument text-3xl">{item.title}</h3>
            <p className="mt-1 text-[13px] text-muted">{item.subtitle}</p>
          </div>
          <p className="max-w-120 leading-relaxed text-muted">{item.description}</p>
        </div>
        <div className="text-muted transition-transform group-hover:translate-x-4 xl:col-start-3 xl:self-start xl:justify-self-end">
          <FontAwesomeIcon className="block size-5" icon={faArrowRight} />
        </div>
      </a>
    </li>
  )
}
