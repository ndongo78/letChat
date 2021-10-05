import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Login from './components/Login'
import {AuthProvider} from '../src/context/AuthContex'
import Chat from './components/Chat'

function App() {
  return (
    
    <Router>
      <AuthProvider>
      <Switch>
        <Route  path='/' exact component={Login} />
        <Route path='/chat' component={Chat} />
      </Switch>
      </AuthProvider>
    </Router>
    
  );
}

export default App;
