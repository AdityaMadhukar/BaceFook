import Navbar from './Navbar';

import DashBoard from './DashBoard';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SignIn from './SignIn';
// import SignUp from './SignUp';
function App() {
  return (
    <>
    {/* <Router> */}
      <div className="App">
        <Navbar />
        
        <div className="content">
          {/* <Switch> */}
            {/* <Route exact path='/'> */}
              <DashBoard />
            {/* </Route> */}
            {/* <Route exact path='/SignIn'>
              <SignIn />
            </Route>
            <Route exact path='/SignUp'>
              <SignUp />
            </Route> */}
          {/* </Switch> */}
        </div>
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
