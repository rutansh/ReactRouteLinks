import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Users = ({ match }) => {
  return <div>{match.params.id}</div>;
};
const Info = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={match.url + "/phone"}>Phone</Link>
        </li>
        <li>
          <Link to={match.url + "/email"}>Email</Link>
        </li>
        <li>
          <Link to={match.url + "/address"}>Address</Link>
        </li>
      </ul>
      <hr />
      <Route
        path={match.url + "/phone"}
        render={props => <div> Phone number is 5109364767</div>}
      />
      <Route
        path={match.url + "/email"}
        render={props => <div> Email is rutansh96@gmail.com</div>}
      />
      <Route
        path={match.url + "/address"}
        render={props => <div> Address is aaaaa.</div>}
      />
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users/abc">Users:abc</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" render={() => <div>About</div>} />
      <Route path="/users/:id" component={Users} />
      <Route children={() => <div>Always Rendered</div>} />
      <Route strict path="/info" component={Info} />
    </div>
  </BrowserRouter>
);

export default App;
