import React from 'react';
import {Button, Row, Col} from 'muicss/react';


const ColorPicker = (props) => { 
	return (<Row>
        <Col md='3'>
          <Button
            color="primary"
            variant="fab"
            size="small"
            style={{'backgroundColor': '#d9534f'}}
            onClick={() => props.onColorChange('#d9534f')}
          >
          </Button>
        </Col>
        <Col md='3'>
          <Button
            color="primary"
            variant="fab"
            size="small"
            style={{'backgroundColor': '#5bc0de'}}
            onClick={() => props.onColorChange('#5bc0de')}
          >
          </Button>
        </Col>
        <Col md='3'>
          <Button
            color="primary"
            variant="fab"
            size="small"
            style={{'backgroundColor': '#5cb85c'}}
            onClick={() => props.onColorChange('#5cb85c')}
          >
          </Button>
        </Col>
        <Col md='3'>
          <Button
            color="primary"
            variant="fab"
            size="small"
            style={{'backgroundColor': '#428bca'}}
            onClick={() => props.onColorChange('#428bca')}
          >
          </Button>
        </Col>
        <Col md='3'>
          <Button
            color="primary"
            variant="fab"
            size="small"
            style={{'backgroundColor': '#DAF7A6'}}
            onClick={() => props.onColorChange('#DAF7A6')}
          >
          </Button>
        </Col>
        <Col md='3'>
          <Button
            color="primary"
            variant="fab"
            size="small"
            style={{'backgroundColor': '#FFC300'}}
            onClick={() => props.onColorChange('#FFC300')}
          >
          </Button>
        </Col>
        <Col md='3'>
          <Button
            color="primary"
            variant="fab"
            size="small"
            style={{'backgroundColor': '#C70039'}}
            onClick={() => props.onColorChange('#C70039')}
          >
          </Button>
        </Col>
        <Col md='3'>
          <Button
            color="primary"
            variant="fab"
            size="small"
            style={{'backgroundColor': '#9C27B0'}}
            onClick={() => props.onColorChange('#9C27B0')}
          >
          </Button>
        </Col>
        <Col md='3'>
          <Button
            color="primary"
            variant="fab"
            size="small"
            style={{'backgroundColor': '#FFF176'}}
            onClick={() => props.onColorChange('#FFF176')}
          >
          </Button>
        </Col>
        <Col md='3'>
          <Button
            color="primary"
            variant="fab"
            size="small"
            style={{'backgroundColor': '#000000'}}
            onClick={() => props.onColorChange('#000000')}
          >
          </Button>
        </Col>
      </Row>)
}
export default ColorPicker;