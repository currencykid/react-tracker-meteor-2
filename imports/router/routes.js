import React from 'react';
import Home from '../ui/pages/Home.jsx';
import About from '../ui/pages/About.jsx';
import NotFound from '../ui/pages/NotFound.jsx';
import {mount} from 'react-mounter'; 
import MainLayout from '../ui/layouts/MainLayout'; 
import PostsIndex from '../ui/components/posts/PostsIndex.jsx'; 

FlowRouter.route('/', {
  name: 'Index',
  action() {
    mount(MainLayout, {
      children: <PostsIndex /> 
    })
  }
});
