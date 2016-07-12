import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

export default class PostsIndex extends Component{
  render(){
    return(
      <div>
          <h1>List of all posts</h1>
      </div>
    );
  }
}
