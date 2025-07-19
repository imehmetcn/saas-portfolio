import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Middleware logic burada
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Admin rotaları için token kontrolü
        if (req.nextUrl.pathname.startsWith('/admin')) {
          // Login sayfası hariç tüm admin sayfaları için token gerekli
          if (req.nextUrl.pathname === '/admin/login') {
            return true;
          }
          return !!token && token.role === 'admin';
        }
        return true;
      },
    },
  }
)

export const config = {
  matcher: ['/admin/:path*']
}