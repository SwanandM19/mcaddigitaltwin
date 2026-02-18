import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, organization, interest, message } = body

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db('mcad_robotics') // Database name
    const collection = db.collection('leads') // Collection name

    const lead = {
      name,
      email,
      phone,
      organization: organization || '',
      interest: interest || 'Training',
      message: message || '',
      createdAt: new Date(),
      status: 'new'
    }

    const result = await collection.insertOne(lead)

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving lead:', error)
    return NextResponse.json(
      { error: 'Failed to save lead' },
      { status: 500 }
    )
  }
}
