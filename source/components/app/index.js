import React, {Component} from 'react'
import { Media, Image, Col, Grid, Row, FormGroup, FormControl,Button, InputGroup} from 'react-bootstrap';
import style from './style.css'

export default class App extends Component {
  render() {
    return <div>
    <Media>
			<Grid>
    		<Row className={style.margin}>
					<Col xs={4} md={1}>
						<Media.Left align="top">
							<Image className={style.ava} src="./source/components/app/test.png" thumbnail circle />
						</Media.Left>
					</Col>
					<Col xs={8} md={5}>
						<Media.Body>
							<Media.Heading>Top aligned media</Media.Heading>
							<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
						</Media.Body>
					</Col>
				</Row>
				<Row className={style.margin}>
					<Col xs={4} md={1}>
						<Media.Left align="top">
							<Image className={style.ava} src="./source/components/app/test.png" thumbnail circle />
						</Media.Left>
					</Col>
					<Col xs={8} md={5}>
						<Media.Body>
							<Media.Heading>Top aligned media</Media.Heading>
							<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
						</Media.Body>
					</Col>
				</Row>
				<Row>
					<Col xs={8} md={5}>
					  <FormGroup>
							<InputGroup>
								<FormControl type="text" />
								<InputGroup.Button>
									<Button>Action</Button>
								</InputGroup.Button>
							</InputGroup>
						</FormGroup>
					</Col>
				</Row>
			</Grid>
    </Media>
		</div>
  }
}