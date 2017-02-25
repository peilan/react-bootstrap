import React, {Component} from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import style from './style.css'

export default class App extends Component {
  render() {
    return <div>
      <Jumbotron className={style.content}>
        <h1>React-bootstrap example!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button onClick={this.openDocs} bsStyle="primary">Learn more</Button></p>
      </Jumbotron>
		</div>
  }

  openDocs(){
    location.href = 'https://react-bootstrap.github.io/components.html'
  }
}