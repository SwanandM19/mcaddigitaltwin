import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { username, password } = body

        const adminUsername = process.env.ADMIN_USERNAME
        const adminPassword = process.env.ADMIN_PASSWORD

        if (!adminUsername || !adminPassword) {
            return NextResponse.json(
                { error: 'Admin credentials not configured' },
                { status: 500 }
            )
        }

        if (username === adminUsername && password === adminPassword) {
            // Simple token - in production use JWT or similar
            const token = Buffer.from(`${username}:${Date.now()}`).toString('base64')
            return NextResponse.json({ success: true, token }, { status: 200 })
        }

        return NextResponse.json(
            { error: 'Invalid credentials' },
            { status: 401 }
        )
    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json(
            { error: 'Login failed' },
            { status: 500 }
        )
    }
}
