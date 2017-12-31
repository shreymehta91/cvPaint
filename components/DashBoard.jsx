import React from 'react';
import { SpringGrid } from 'react-stonecutter';
import imageApi from '../imageApi';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'muicss/react';

const imageStyle = {
  width: '300px',
  height: '300px'
};

const addButton = {
  position: 'fixed',
  right: '10px',
  bottom: '10px'
};

const DashBoard = () => {
  return (
    <div>
      <Row>
        {imageApi.map(function(imageObj, index) {
          return (
            <Col md="4" key={imageObj.id}>
              <Link to={'/draw/' + index}>
                <img src={imageObj.path} style={imageStyle} />
              </Link>
            </Col>
          );
        })}
      </Row>

      <Link to={'/draw'} style={addButton}>
        <Button size="large" variant="fab" color="primary">
          +
        </Button>
      </Link>
    </div>
  );
};
export default DashBoard;
