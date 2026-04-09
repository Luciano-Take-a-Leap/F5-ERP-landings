// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const secret = request.nextUrl.searchParams.get('secret')
    
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: 'Invalid token' }, 
        { status: 401 }
      )
    }

    revalidatePath('/')
        
    return NextResponse.json({
      revalidated: true,
      path: '/',
      now: Date.now()
    })
    
  } catch (err) {
    console.error('❌ Error revalidating:', err)
    return NextResponse.json(
      { 
        message: 'Error revalidating',
        error: err instanceof Error ? err.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}