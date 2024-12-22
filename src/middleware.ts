import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PASSWORD = '3Dy15Ws5sfMY'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin')) {
    const cookie = request.cookies.get('admin-auth')
    if (cookie?.value === PASSWORD) {
      return NextResponse.next()
    }
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
