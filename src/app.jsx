import './app.css';
import Login from './components/login/login';

function App({authService}) {
  return (
    <Login authService={authService}/> 
  );
}

export default App;
