import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';


import AnimationScroll from './animationScroll';


render((
    <Router history={hashHistory}>
    <Route path='/' component={AnimationScroll} />
</Router>), document.getElementById('root'));