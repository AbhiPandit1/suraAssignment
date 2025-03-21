import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './component/ContextFunctions/CustomCursor';
import { CursorProvider } from './component/ContextFunctions/CursorContext';
import Header from './component/Header/Header';
import Home from './pages/Home/Home';
import Footer from './component/Footer/Footer';
import Pricing from './pages/Pricing/Pricing';
import Features from './pages/Features/Features';
import SignIn from './pages/Signin/SignIn';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';

function App() {
  return (
    <CursorProvider>
      <Router>
        <CustomCursor />
        <div className="h-full relative">
          {/* Header */}
          <Header />

          {/* Page Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
          <Routes>
            <Route path="/features" element={<Features />} />
          </Routes>

          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
          </Routes>
          <Routes>
            <Route path="/profile" element={<Profile />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </CursorProvider>
  );
}

export default App;
