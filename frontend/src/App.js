import './customStyles/styles.css'
import HomePage from './pages/HomePage';
import Applied from './pages/Applied';
import MyProfile from './pages/MyProfile'

import 'antd/dist/antd.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/applied' component={Applied} />
        <Route exact path='/myprofile' component={MyProfile} />
      </Router>
    </div>
  );
}

export default App;
