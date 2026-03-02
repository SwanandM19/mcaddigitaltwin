import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET() {
    try {
        const client = await clientPromise
        const db = client.db('mcad_robotics')
        const collection = db.collection('leads')

        // Fetch all leads, sorted by newest first
        const leads = await collection
            .find({})
            .sort({ createdAt: -1 })
            .toArray()

        return NextResponse.json({ success: true, leads }, { status: 200 })
    } catch (error) {
        console.error('Error fetching leads:', error)
        return NextResponse.json(
            { error: 'Failed to fetch leads' },
            { status: 500 }
        )
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id')

        if (!id) {
            return NextResponse.json(
                { error: 'Lead ID is required' },
                { status: 400 }
            )
        }

        const { ObjectId } = await import('mongodb')
        const client = await clientPromise
        const db = client.db('mcad_robotics')
        const collection = db.collection('leads')

        const result = await collection.deleteOne({ _id: new ObjectId(id) })

        if (result.deletedCount === 0) {
            return NextResponse.json(
                { error: 'Lead not found' },
                { status: 404 }
            )
        }

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (error) {
        console.error('Error deleting lead:', error)
        return NextResponse.json(
            { error: 'Failed to delete lead' },
            { status: 500 }
        )
    }
}
