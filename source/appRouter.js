import React, {Component} from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {render} from 'react-dom'
import Previews from './components/previews'
import Post from './components/post'
import Page from './containers/page'

export default class AppRouter extends Component {
  render() {return <Router history={browserHistory}>
      <Route path='/' component={Page}>
        <IndexRoute component={Previews}/>
        <Route path='post/:postId' component={Post}/>
      </Route>
    </Router>
  }
}