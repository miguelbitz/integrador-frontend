import './App.css'
import Router from "./routes/Router";
import { GlobalState } from './contexts/GlobalState'


function App() {
  return (
    <div>
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
