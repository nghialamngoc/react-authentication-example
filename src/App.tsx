import { GoogleOAuthProvider } from '@react-oauth/google'
import { AppRoutes } from './routes'
import { envConfig } from './config/envConfig'

function App() {
  return (
    <GoogleOAuthProvider clientId={envConfig.googleClientId}>
      <AppRoutes />
    </GoogleOAuthProvider>
  )
}

export default App
