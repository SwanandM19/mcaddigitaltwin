'use client'

import { useState, useEffect, useCallback } from 'react'

interface Lead {
    _id: string
    name: string
    email: string
    phone: string
    organization: string
    interest: string
    message: string
    createdAt: string
    status: string
}

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const [leads, setLeads] = useState<Lead[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
    const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
    const [statusFilter, setStatusFilter] = useState('all')

    const fetchLeads = useCallback(async () => {
        setIsLoading(true)
        try {
            const res = await fetch('/api/admin/leads')
            const data = await res.json()
            if (data.success) {
                setLeads(data.leads)
            }
        } catch (err) {
            console.error('Failed to fetch leads:', err)
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        if (isAuthenticated) {
            fetchLeads()
        }
    }, [isAuthenticated, fetchLeads])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoggingIn(true)
        setLoginError('')

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            })
            const data = await res.json()

            if (data.success) {
                setIsAuthenticated(true)
                setLoginError('')
            } else {
                setLoginError(data.error || 'Invalid credentials')
            }
        } catch {
            setLoginError('Login failed. Please try again.')
        } finally {
            setIsLoggingIn(false)
        }
    }

    const handleDelete = async (id: string) => {
        try {
            const res = await fetch(`/api/admin/leads?id=${id}`, {
                method: 'DELETE',
            })
            const data = await res.json()
            if (data.success) {
                setLeads(leads.filter(l => l._id !== id))
                setDeleteConfirm(null)
                if (selectedLead?._id === id) setSelectedLead(null)
            }
        } catch (err) {
            console.error('Failed to delete lead:', err)
        }
    }

    const filteredLeads = leads.filter(lead => {
        const matchesSearch =
            lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.phone?.includes(searchTerm) ||
            lead.organization?.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesStatus = statusFilter === 'all' || lead.status === statusFilter
        return matchesSearch && matchesStatus
    })

    const formatDate = (dateStr: string) => {
        try {
            return new Date(dateStr).toLocaleDateString('en-IN', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            })
        } catch {
            return dateStr
        }
    }

    // ===================== LOGIN SCREEN =====================
    if (!isAuthenticated) {
        return (
            <>
                <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

          * { margin: 0; padding: 0; box-sizing: border-box; }

          body {
            font-family: 'Inter', sans-serif;
            background: #0a0a0f;
            min-height: 100vh;
            overflow: hidden;
          }

          .login-wrapper {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background:
              radial-gradient(ellipse at 20% 50%, rgba(120, 80, 255, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(0, 200, 255, 0.06) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, rgba(255, 50, 100, 0.04) 0%, transparent 50%),
              #0a0a0f;
            position: relative;
          }

          .login-wrapper::before {
            content: '';
            position: absolute; inset: 0;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.015'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            pointer-events: none;
          }

          .login-card {
            width: 420px;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.06);
            border-radius: 24px;
            padding: 48px 40px;
            backdrop-filter: blur(40px);
            position: relative;
            z-index: 1;
            animation: cardSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          }

          @keyframes cardSlideUp {
            from { opacity: 0; transform: translateY(30px) scale(0.97); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }

          .login-card::before {
            content: '';
            position: absolute; top: -1px; left: 20%; right: 20%;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(120, 80, 255, 0.5), transparent);
          }

          .login-icon {
            width: 56px; height: 56px;
            background: linear-gradient(135deg, #7850ff 0%, #00c8ff 100%);
            border-radius: 16px;
            display: flex; align-items: center; justify-content: center;
            margin: 0 auto 28px;
            box-shadow: 0 8px 32px rgba(120, 80, 255, 0.3);
          }

          .login-icon svg { width: 28px; height: 28px; color: white; }

          .login-title {
            text-align: center;
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 6px;
            letter-spacing: -0.5px;
          }

          .login-subtitle {
            text-align: center;
            font-size: 14px;
            color: rgba(255,255,255,0.4);
            margin-bottom: 36px;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-label {
            display: block;
            font-size: 13px;
            font-weight: 500;
            color: rgba(255,255,255,0.5);
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .form-input {
            width: 100%;
            padding: 14px 16px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 12px;
            color: #fff;
            font-size: 15px;
            font-family: 'Inter', sans-serif;
            transition: all 0.3s ease;
            outline: none;
          }

          .form-input::placeholder {
            color: rgba(255,255,255,0.2);
          }

          .form-input:focus {
            border-color: rgba(120, 80, 255, 0.5);
            background: rgba(120, 80, 255, 0.05);
            box-shadow: 0 0 0 4px rgba(120, 80, 255, 0.1);
          }

          .login-btn {
            width: 100%;
            padding: 14px;
            background: linear-gradient(135deg, #7850ff 0%, #5a30e0 100%);
            border: none;
            border-radius: 12px;
            color: white;
            font-size: 15px;
            font-weight: 600;
            font-family: 'Inter', sans-serif;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 8px;
            position: relative;
            overflow: hidden;
          }

          .login-btn:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 8px 32px rgba(120, 80, 255, 0.4);
          }

          .login-btn:active:not(:disabled) {
            transform: translateY(0);
          }

          .login-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }

          .login-error {
            background: rgba(255, 50, 80, 0.08);
            border: 1px solid rgba(255, 50, 80, 0.2);
            border-radius: 10px;
            padding: 12px 16px;
            color: #ff6b81;
            font-size: 13px;
            text-align: center;
            margin-bottom: 20px;
            animation: shake 0.4s ease;
          }

          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-6px); }
            75% { transform: translateX(6px); }
          }

          .spinner {
            display: inline-block;
            width: 18px; height: 18px;
            border: 2px solid rgba(255,255,255,0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 0.6s linear infinite;
            vertical-align: middle;
            margin-right: 8px;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
                <div className="login-wrapper">
                    <div className="login-card">
                        <div className="login-icon">
                            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h1 className="login-title">Admin Panel</h1>
                        <p className="login-subtitle">Enter your credentials to continue</p>

                        {loginError && <div className="login-error">{loginError}</div>}

                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label className="form-label">Username</label>
                                <input
                                    id="admin-username"
                                    type="text"
                                    className="form-input"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    autoFocus
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input
                                    id="admin-password"
                                    type="password"
                                    className="form-input"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button id="admin-login-btn" type="submit" className="login-btn" disabled={isLoggingIn}>
                                {isLoggingIn ? <><span className="spinner" /> Signing in...</> : 'Sign In'}
                            </button>
                        </form>
                    </div>
                </div>
            </>
        )
    }

    // ===================== DASHBOARD =====================
    return (
        <>
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: 'Inter', sans-serif;
          background: #0a0a0f;
          min-height: 100vh;
          color: #fff;
        }

        .dashboard {
          min-height: 100vh;
          background:
            radial-gradient(ellipse at 10% 10%, rgba(120, 80, 255, 0.05) 0%, transparent 40%),
            radial-gradient(ellipse at 90% 90%, rgba(0, 200, 255, 0.04) 0%, transparent 40%),
            #0a0a0f;
        }

        /* ---- Top Bar ---- */
        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 32px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          backdrop-filter: blur(20px);
          background: rgba(10,10,15,0.8);
          position: sticky; top: 0; z-index: 50;
        }

        .topbar-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .topbar-logo {
          width: 36px; height: 36px;
          background: linear-gradient(135deg, #7850ff 0%, #00c8ff 100%);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
        }

        .topbar-logo svg { width: 18px; height: 18px; color: white; }

        .topbar-title {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.3px;
        }

        .topbar-badge {
          background: rgba(120, 80, 255, 0.15);
          color: #a78bfa;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .logout-btn {
          padding: 8px 20px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
        }

        .logout-btn:hover {
          background: rgba(255, 50, 80, 0.1);
          border-color: rgba(255, 50, 80, 0.3);
          color: #ff6b81;
        }

        /* ---- Stats ---- */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          padding: 24px 32px;
        }

        .stat-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 20px 24px;
          transition: all 0.3s;
        }

        .stat-card:hover {
          border-color: rgba(120, 80, 255, 0.2);
          background: rgba(120, 80, 255, 0.03);
        }

        .stat-label {
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .stat-value {
          font-size: 32px;
          font-weight: 800;
          background: linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.6));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -1px;
        }

        .stat-value.purple {
          background: linear-gradient(135deg, #a78bfa, #7850ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-value.cyan {
          background: linear-gradient(135deg, #67e8f9, #00c8ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-value.green {
          background: linear-gradient(135deg, #86efac, #22c55e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-value.pink {
          background: linear-gradient(135deg, #fda4af, #f43f5e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ---- Controls ---- */
        .controls {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 32px 20px;
        }

        .search-box {
          flex: 1;
          max-width: 400px;
          position: relative;
        }

        .search-box svg {
          position: absolute;
          left: 14px; top: 50%;
          transform: translateY(-50%);
          width: 16px; height: 16px;
          color: rgba(255,255,255,0.3);
        }

        .search-input {
          width: 100%;
          padding: 10px 16px 10px 40px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          color: #fff;
          font-size: 13px;
          font-family: 'Inter', sans-serif;
          outline: none;
          transition: all 0.3s;
        }

        .search-input::placeholder { color: rgba(255,255,255,0.25); }
        .search-input:focus {
          border-color: rgba(120, 80, 255, 0.4);
          background: rgba(120, 80, 255, 0.04);
        }

        .filter-select {
          padding: 10px 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          color: #fff;
          font-size: 13px;
          font-family: 'Inter', sans-serif;
          outline: none;
          cursor: pointer;
          appearance: none;
          min-width: 140px;
        }

        .filter-select option { background: #1a1a2e; }

        .refresh-btn {
          padding: 10px 20px;
          background: rgba(120, 80, 255, 0.1);
          border: 1px solid rgba(120, 80, 255, 0.2);
          border-radius: 10px;
          color: #a78bfa;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
          display: flex; align-items: center; gap: 6px;
        }

        .refresh-btn:hover {
          background: rgba(120, 80, 255, 0.2);
        }

        /* ---- Table ---- */
        .table-wrapper {
          padding: 0 32px 32px;
        }

        .table-container {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          overflow: hidden;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        thead {
          background: rgba(255,255,255,0.03);
        }

        th {
          padding: 14px 20px;
          text-align: left;
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        td {
          padding: 16px 20px;
          font-size: 13px;
          color: rgba(255,255,255,0.8);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }

        tr {
          transition: background 0.2s;
          cursor: pointer;
        }

        tbody tr:hover {
          background: rgba(120, 80, 255, 0.04);
        }

        .status-badge {
          display: inline-flex;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .status-new {
          background: rgba(34, 197, 94, 0.12);
          color: #4ade80;
        }

        .status-contacted {
          background: rgba(120, 80, 255, 0.12);
          color: #a78bfa;
        }

        .status-converted {
          background: rgba(0, 200, 255, 0.12);
          color: #67e8f9;
        }

        .action-btn {
          padding: 6px 12px;
          border-radius: 8px;
          border: none;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
        }

        .view-btn {
          background: rgba(120, 80, 255, 0.1);
          color: #a78bfa;
          border: 1px solid rgba(120, 80, 255, 0.2);
          margin-right: 6px;
        }

        .view-btn:hover {
          background: rgba(120, 80, 255, 0.2);
        }

        .delete-btn {
          background: rgba(255, 50, 80, 0.1);
          color: #ff6b81;
          border: 1px solid rgba(255, 50, 80, 0.2);
        }

        .delete-btn:hover {
          background: rgba(255, 50, 80, 0.2);
        }

        .confirm-delete {
          display: inline-flex; align-items: center; gap: 6px;
        }

        .confirm-yes {
          background: rgba(255, 50, 80, 0.2);
          color: #ff6b81;
          border: 1px solid rgba(255, 50, 80, 0.3);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
        }

        .confirm-no {
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
        }

        /* ---- Modal ---- */
        .modal-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          z-index: 100;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal {
          width: 520px;
          max-height: 80vh;
          background: #141420;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          overflow-y: auto;
          animation: modalSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalSlide {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 28px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .modal-header h2 {
          font-size: 18px;
          font-weight: 700;
        }

        .modal-close {
          width: 32px; height: 32px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
          transition: all 0.2s;
        }

        .modal-close:hover {
          background: rgba(255, 50, 80, 0.1);
          color: #ff6b81;
        }

        .modal-body {
          padding: 20px 28px 28px;
        }

        .detail-row {
          margin-bottom: 18px;
        }

        .detail-label {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 6px;
        }

        .detail-value {
          font-size: 15px;
          color: rgba(255,255,255,0.9);
          line-height: 1.5;
          word-break: break-word;
        }

        .detail-value.email-link {
          color: #a78bfa;
        }

        /* ---- Empty State ---- */
        .empty-state {
          text-align: center;
          padding: 60px 20px;
        }

        .empty-state svg {
          width: 48px; height: 48px;
          color: rgba(255,255,255,0.15);
          margin-bottom: 16px;
        }

        .empty-state p {
          color: rgba(255,255,255,0.3);
          font-size: 14px;
        }

        /* ---- Loading ---- */
        .loading-state {
          text-align: center;
          padding: 60px;
        }

        .loading-spinner {
          width: 40px; height: 40px;
          border: 3px solid rgba(255,255,255,0.08);
          border-top-color: #7850ff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto 16px;
        }

        .loading-state p {
          color: rgba(255,255,255,0.3);
          font-size: 14px;
        }

        /* ---- Responsive ---- */
        @media (max-width: 900px) {
          .stats-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .controls {
            flex-wrap: wrap;
          }
          .topbar {
            padding: 12px 16px;
          }
          .table-wrapper, .stats-row, .controls {
            padding-left: 16px;
            padding-right: 16px;
          }
        }

        @media (max-width: 600px) {
          .stats-row {
            grid-template-columns: 1fr;
          }
          .modal {
            width: 95vw;
          }
        }
      `}</style>

            <div className="dashboard">
                {/* Top Bar */}
                <div className="topbar">
                    <div className="topbar-left">
                        <div className="topbar-logo">
                            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <span className="topbar-title">MCAD Admin</span>
                        <span className="topbar-badge">Leads Dashboard</span>
                    </div>
                    <button className="logout-btn" onClick={() => setIsAuthenticated(false)}>
                        Sign Out
                    </button>
                </div>

                {/* Stats */}
                <div className="stats-row">
                    <div className="stat-card">
                        <div className="stat-label">Total Leads</div>
                        <div className="stat-value purple">{leads.length}</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">New</div>
                        <div className="stat-value green">{leads.filter(l => l.status === 'new').length}</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">Contacted</div>
                        <div className="stat-value cyan">{leads.filter(l => l.status === 'contacted').length}</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">Today</div>
                        <div className="stat-value pink">
                            {leads.filter(l => {
                                const d = new Date(l.createdAt)
                                const now = new Date()
                                return d.toDateString() === now.toDateString()
                            }).length}
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="controls">
                    <div className="search-box">
                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            id="search-leads"
                            type="text"
                            className="search-input"
                            placeholder="Search by name, email, phone, org..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select
                        id="status-filter"
                        className="filter-select"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="all">All Statuses</option>
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="converted">Converted</option>
                    </select>
                    <button className="refresh-btn" onClick={fetchLeads}>
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Refresh
                    </button>
                </div>

                {/* Table */}
                <div className="table-wrapper">
                    <div className="table-container">
                        {isLoading ? (
                            <div className="loading-state">
                                <div className="loading-spinner" />
                                <p>Loading leads...</p>
                            </div>
                        ) : filteredLeads.length === 0 ? (
                            <div className="empty-state">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                </svg>
                                <p>{searchTerm || statusFilter !== 'all' ? 'No leads found matching your filters' : 'No leads yet'}</p>
                            </div>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Organization</th>
                                        <th>Interest</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredLeads.map((lead, idx) => (
                                        <tr key={lead._id}>
                                            <td style={{ color: 'rgba(255,255,255,0.3)' }}>{idx + 1}</td>
                                            <td style={{ fontWeight: 600, color: '#fff' }}>{lead.name}</td>
                                            <td style={{ color: '#a78bfa' }}>{lead.email}</td>
                                            <td>{lead.phone}</td>
                                            <td>{lead.organization || '—'}</td>
                                            <td>{lead.interest || '—'}</td>
                                            <td>
                                                <span className={`status-badge status-${lead.status || 'new'}`}>
                                                    {lead.status || 'new'}
                                                </span>
                                            </td>
                                            <td style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                                                {formatDate(lead.createdAt)}
                                            </td>
                                            <td>
                                                {deleteConfirm === lead._id ? (
                                                    <span className="confirm-delete">
                                                        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Delete?</span>
                                                        <button className="confirm-yes" onClick={() => handleDelete(lead._id)}>Yes</button>
                                                        <button className="confirm-no" onClick={() => setDeleteConfirm(null)}>No</button>
                                                    </span>
                                                ) : (
                                                    <>
                                                        <button className="action-btn view-btn" onClick={() => setSelectedLead(lead)}>View</button>
                                                        <button className="action-btn delete-btn" onClick={() => setDeleteConfirm(lead._id)}>Delete</button>
                                                    </>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>

            {/* Detail Modal */}
            {selectedLead && (
                <div className="modal-overlay" onClick={() => setSelectedLead(null)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Lead Details</h2>
                            <button className="modal-close" onClick={() => setSelectedLead(null)}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="detail-row">
                                <div className="detail-label">Full Name</div>
                                <div className="detail-value">{selectedLead.name}</div>
                            </div>
                            <div className="detail-row">
                                <div className="detail-label">Email Address</div>
                                <div className="detail-value email-link">{selectedLead.email}</div>
                            </div>
                            <div className="detail-row">
                                <div className="detail-label">Phone Number</div>
                                <div className="detail-value">{selectedLead.phone}</div>
                            </div>
                            <div className="detail-row">
                                <div className="detail-label">Organization</div>
                                <div className="detail-value">{selectedLead.organization || '—'}</div>
                            </div>
                            <div className="detail-row">
                                <div className="detail-label">Interest</div>
                                <div className="detail-value">{selectedLead.interest || '—'}</div>
                            </div>
                            <div className="detail-row">
                                <div className="detail-label">Message</div>
                                <div className="detail-value">{selectedLead.message || 'No message provided'}</div>
                            </div>
                            <div className="detail-row">
                                <div className="detail-label">Status</div>
                                <div className="detail-value">
                                    <span className={`status-badge status-${selectedLead.status || 'new'}`}>
                                        {selectedLead.status || 'new'}
                                    </span>
                                </div>
                            </div>
                            <div className="detail-row">
                                <div className="detail-label">Submitted On</div>
                                <div className="detail-value">{formatDate(selectedLead.createdAt)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
