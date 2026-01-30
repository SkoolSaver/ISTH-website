import { NextRequest, NextResponse } from 'next/server'

const RAPIDAPI_HOST = 'active-jobs-db.p.rapidapi.com'

export async function GET(request: NextRequest) {
  const apiKey = process.env.RAPIDAPI_KEY

  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: 'RAPIDAPI_KEY is not configured' },
      { status: 500 }
    )
  }

  const { searchParams } = new URL(request.url)
  const limit = searchParams.get('limit') || '5'
  const offset = searchParams.get('offset') || '0'
  const descriptionType = searchParams.get('description_type') || 'text'
  const includeAi = searchParams.get('include_ai')
  const advancedTitleFilter = searchParams.get('advanced_title_filter')
  const locationFilter = searchParams.get('location_filter')
  const dateFilter = searchParams.get('date_filter')

  const params = new URLSearchParams({
    limit,
    offset,
    description_type: descriptionType,
  })
  if (includeAi) params.set('include_ai', includeAi)
  if (advancedTitleFilter) params.set('advanced_title_filter', advancedTitleFilter)
  if (locationFilter) params.set('location_filter', locationFilter)
  if (dateFilter) params.set('date_filter', dateFilter)

  const url = `https://${RAPIDAPI_HOST}/active-ats-7d?${params.toString()}`

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': RAPIDAPI_HOST,
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('RapidAPI error:', response.status, errorText)
      return NextResponse.json(
        { success: false, error: `Jobs API error: ${response.status}` },
        { status: response.status }
      )
    }

    const raw = await response.json()
    const data = Array.isArray(raw) ? raw : (raw?.jobs ?? raw?.data ?? [])
    return NextResponse.json(
      { success: true, data },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        },
      }
    )
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return NextResponse.json({ success: false, error: 'Failed to fetch jobs' }, { status: 500 })
  }
}
