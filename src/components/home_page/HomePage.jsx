import React, { Component } from 'react';
import './HomePage.scss';
import {  Row , Col} from 'reactstrap';
import { Image } from 'react-bootstrap';


export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className='homeContainer'>
          <h1>WILD CIRCUS</h1>
          <h3 className="motto">"Dreaming the unimaginable, creating the unexpected"</h3>
        </div>
        <Row className="imageRow">
          <Col className="imageCol">
            <Image src="https://www.dropbox.com/s/r9t4ejkxhxmdvx6/lopez-robin-576654-unsplash.jpg?raw=1" fluid className="acrobat" />
          </Col>
        </Row>
       
        {/* <blockquote class="blockquote text-right">
            <p class="critic">The Wild Circus show is a masterpiece!</p>
            <p class="critic">From its ravishing costumes to its stunning choreography, you will be mesmerized by their performance!</p>
            <footer class="blockquote-footer">John Doe <cite title="Source Title">New York Times</cite></footer>
          </blockquote> */}

      </div>
    )
  }
}
