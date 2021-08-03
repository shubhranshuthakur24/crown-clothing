import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

const HomePage = (props) => {
  return (
    <div>
      <button onclick={() => props.history.push("/topics")}>Topics</button>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = () => {
  return (
    <div>
      <h1>TOPICS LIST PAGE </h1>
    </div>
  );
};

const TopicDetail = (props) => {
  return (
    <div>
      <h1>TOPICS DETAIL PAGE: {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/topics" component={TopicsList} />
      <Route path="/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

export default App;
