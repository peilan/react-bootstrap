import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import {render} from 'react-dom'
import Previews from './components/previews'
import Post from './components/post'
import App from './containers/app'

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Previews} />
      <Route path='post/:postId' component={Post} />
    </Route>
  </Router>,
  document.getElementById('root')
)