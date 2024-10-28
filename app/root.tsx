import type { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { Links, Meta, Outlet, Scripts, ScrollRestoration, json } from '@remix-run/react'

import './tailwind.css'

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  return json({ origin: url.origin })
}

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { name: 'description', content: 'オーランド・マジックファンが運営するNBAのデータを分析するブログ' },
  { property: 'og:title', content: 'Magic Fan in Japan' },
  { property: 'og:description', content: 'オーランド・マジックファンが運営するNBAのデータを分析するブログ' },
  data ? { property: 'og:image', content: `${data.origin}/og.png` } : {},
]

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
