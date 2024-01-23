import Link from 'next/link';
import './globals.css'
import { oswaldFont } from '@/utils/fonts';

export const metadata = {
  title: 'MediaCollege Denmark',
  description: 'Vi arbejder...',
}

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body className={`${oswaldFont.className}`}>
        <div className="global-layout">
          Global Layout<br/>
          <Link href="/">Home</Link> <Link href="/catalog/">Catalog</Link> <Link href="/about">About</Link> <Link href="/blogposts">Blogposts</Link>

          {children}
        </div>
      </body>
    </html>
  )
}
