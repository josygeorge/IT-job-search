import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import Applied from './pages/Applied';
import MyProfile from './pages/MyProfile';
import JobDetails from './pages/JobDetails';

import 'antd/dist/antd.css';
import { Spin } from 'antd';
import './customStyles/styles.css';
import { useSelector } from 'react-redux';


function App() {
  const { loading } = useSelector(state => state.loaderReducer)
  return (
    <div className="App">
      {loading && <div className="loader">
        <Spin size="large" tip="Loading" />
      </div>

      }
      <Router>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/applied' component={Applied} />
        <Route exact path='/myprofile' component={MyProfile} />
        <Route exact path='/jobdetails/:id' component={JobDetails} />
      </Router>
    </div>
  );
}

export default App;
