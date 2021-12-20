import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Spin } from 'antd';
import './customStyles/styles.css';
import { useSelector } from 'react-redux';

import HomePage from './pages/HomePage';
import Applied from './pages/Applied';
import MyProfile from './pages/Profile/MyProfile';
import JobDetails from './pages/Jobs/JobDetails';
import PostNewJob from './pages/Jobs/PostNewJob';
import Register from './pages/Register';
import Login from './pages/Login';
import MyProfileEdit from './pages/Profile/MyProfileEdit';


function App() {
  const { loading } = useSelector(state => state.loaderReducer)
  return (
    <div className="App">
      {loading && <div className="loader">
        <Spin size="large" tip="Loading" />
      </div>

      }
      <Router>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />

        <ProtectedRoute exact path='/' component={HomePage} />
        <ProtectedRoute exact path='/applied' component={Applied} />
        <ProtectedRoute exact path='/myprofile' component={MyProfile} />
        <ProtectedRoute exact path='/myprofile-edit' component={MyProfileEdit} />
        <ProtectedRoute exact path='/jobdetails/:id' component={JobDetails} />
        <ProtectedRoute exact path='/postnewjob' component={PostNewJob} />

      </Router>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  const user = localStorage.getItem('user');
  if (!user) {
    return <Redirect to='/login' />
  }
  else {
    return <Route {...props} />
  }
}
