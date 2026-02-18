'use client'

import { useState } from 'react'

export default function TrainingLeadPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    interest: 'Training',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          interest: 'Training',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-[#e5e5e5] p-8">
        <h1 className="text-3xl font-bold text-obsidian mb-2" style={{ color: '#111111' }}>
          Join Our Training Program
        </h1>
        <p className="text-sm text-subtle mb-6" style={{ color: '#737373' }}>
          Fill in your details and we&apos;ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-obsidian mb-1" style={{ color: '#111111' }}>
              Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:border-obsidian transition-colors"
              style={{ borderColor: '#E5E5E5' }}
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-obsidian mb-1" style={{ color: '#111111' }}>
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:border-obsidian transition-colors"
              style={{ borderColor: '#E5E5E5' }}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-obsidian mb-1" style={{ color: '#111111' }}>
              Phone *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:border-obsidian transition-colors"
              style={{ borderColor: '#E5E5E5' }}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-obsidian mb-1" style={{ color: '#111111' }}>
              Organization
            </label>
            <input
              type="text"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:border-obsidian transition-colors"
              style={{ borderColor: '#E5E5E5' }}
              placeholder="College/Company (optional)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-obsidian mb-1" style={{ color: '#111111' }}>
              Interest
            </label>
            <select
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:border-obsidian transition-colors"
              style={{ borderColor: '#E5E5E5' }}
            >
              <option value="Training">Training Program</option>
              <option value="Product">Product Demo</option>
              <option value="Consultation">Consultation</option>
              <option value="Lab Setup">Lab Setup</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-obsidian mb-1" style={{ color: '#111111' }}>
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-obsidian/20 focus:border-obsidian transition-colors resize-none"
              style={{ borderColor: '#E5E5E5' }}
              placeholder="Tell us more about your requirements (optional)"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-sm text-emerald-700">
              ✓ Thank you! We&apos;ll contact you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
              ✗ Something went wrong. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-obsidian text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#111111' }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}

