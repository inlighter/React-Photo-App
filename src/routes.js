import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ProfilePage from './components/profile/ProfilePage';
import ManageDetailsPage from './components/details/ManageDetailsPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProfilePage} />
    <Route path="photo" component={ManageDetailsPage} />
    <Route path="photo/:id" component={ManageDetailsPage} />
  </Route>
);



// export default (
//   <Route path="/" component={App}>
//     <IndexRoute component={ProfilePage} />
//     <Route path="photo" component={ManageDetailsPage} />
//     <Route path="photo/:id" component={ManageDetailsPage} />
//   </Route>
// );
