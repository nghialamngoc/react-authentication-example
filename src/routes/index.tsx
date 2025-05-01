import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'
import DetailUser from '@/pages/DetailUser'
import { ProtectedRoute } from './ProtectedRoute'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import OneTapLogin from '@/components/layout/OneTapLogin'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsOfUse from '@/pages/TermsOfUse'
import Home from '@/pages/Home'

export const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <OneTapLogin />
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-6">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/privary-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />
                <Route path="/" element={<Home />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/detail-user/:id"
                  element={
                    <ProtectedRoute adminOnly>
                      <DetailUser />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>
        </div>
      </AuthProvider>
    </Router>
  )
}
