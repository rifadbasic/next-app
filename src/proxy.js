import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {

  const currentCookis = request.cookies.get("nextjs-token");
  // console.log(currentCookis.value);
  
  const dummyuser = {
    role :"admin",
    email: "user@admin.com"

  }


  let isServicesPage = request.nextUrl.pathname.startsWith('/services')
  let isAdmin = dummyuser.role === 'admin';
  if (isServicesPage && !isAdmin) {
    const url = new URL('/login', request.url)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
 
