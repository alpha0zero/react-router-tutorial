import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import Post from "./components/Post";
import PostId from "./components/PostId";

const App = () => {
  return (
    <Router basename="/router">
      <div>
        <Header />
      </div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/postid" component={PostId} />
        <Route path="/post/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
