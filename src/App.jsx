import { CursorProvider } from './component/ContextFunctions/CursorContext';
import CustomCursor from './component/ContextFunctions/CustomCursor';
import Home from './pages/Home/Home';


function App() {
  return (
    <CursorProvider>
      <div className="h-full relative">
        <CustomCursor />
        <Home />
      </div>
    </CursorProvider>
  );
}

export default App;
