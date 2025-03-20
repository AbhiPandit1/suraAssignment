import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './component/ContextFunctions/CustomCursor';
import { CursorProvider } from './component/ContextFunctions/CursorContext';
import Header from './component/Header/Header';
import Home from './pages/Home/Home';
import Footer from './component/Footer/Footer';

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

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </CursorProvider>
  );
}

export default App;
