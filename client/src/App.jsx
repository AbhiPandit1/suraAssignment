import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import CustomCursor from './component/ContextFunctions/CustomCursor';
import { CursorProvider } from './component/ContextFunctions/CursorContext';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { useAuth } from './component/ContextFunctions/AuthContext';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home/Home'));
const Pricing = lazy(() => import('./pages/Pricing/Pricing'));
const Features = lazy(() => import('./pages/Features/Features'));
const SignIn = lazy(() => import('./pages/Signin/SignIn'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const Login = lazy(() => import('./pages/Login/Login'));

function App() {
  const { token, loading } = useAuth(); // Get token and loading state from context

  // Beautiful loading indicator centered on the screen
  const LoadingScreen = () => (
    <div className="flex items-center justify-center h-screen">
      <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (loading) {
    return <LoadingScreen />; // Show loading screen while checking auth status
  }

  return (
    <CursorProvider>
      <Router>
        <CustomCursor />
        <div className="h-full relative">
          <Header />

          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/features" element={<Features />} />

              {/* Redirect if already authenticated */}
              <Route
                path="/login"
                element={token ? <Navigate to="/home" /> : <Login />}
              />
              <Route
                path="/signin"
                element={token ? <Navigate to="/home" /> : <SignIn />}
              />

              {/* Protected route */}
              <Route
                path="/profile"
                element={token ? <Profile /> : <Navigate to="/login" />}
              />
            </Routes>
          </Suspense>

          <Footer />
        </div>
      </Router>
    </CursorProvider>
  );
}

export default App;
