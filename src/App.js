import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
//import * as actions from './store/actions/index';

const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout');
});
const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders');
});
const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

function App() {
  return (
    <div>
     <Layout>
       <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
       </Switch>
     </Layout>
    </div>
  );
}
// doesn't connected to component since Google Token doesn't working
// const mapDispatchToProps = dispatch => {
//   return {
//     onTryAuthoSignup: () => dispatch(actions.authCheckState())
//   }
// }

export default App;
