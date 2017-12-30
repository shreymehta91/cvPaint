import React from 'react';
import {Button, Row, Col} from 'muicss/react';

const ToolBox = (props) => {
  return (
    <Row>
      <Col md='6'>
        <Button
          color="primary"
          variant="fab"
          size="small"
          style={{'backgroundColor': '#d9534f'}}
          onClick={() => props.onPropChange({ brushCol: '#d9534f' })}
        >
        </Button>
      </Col>
      <Col md='6'>
        <Button
          color="primary"
          variant="fab"
          size="small"
          style={{'backgroundColor': '#5bc0de'}}
          onClick={() => props.onPropChange({ brushCol: '#5bc0de' })}
        >
        </Button>
      </Col>
      <Col md='6'>
        <Button
          color="primary"
          variant="fab"
          size="small"
          style={{'backgroundColor': '#5cb85c'}}
          onClick={() => props.onPropChange({ brushCol: '#5cb85c' })}
        >
        </Button>
      </Col>
      <Col md='6'>
        <Button
          color="primary"
          variant="fab"
          size="small"
          style={{'backgroundColor': '#428bca'}}
          onClick={() => props.onPropChange({ brushCol: '#428bca' })}
        >
        </Button>
      </Col>
      <Col md='6'>
        <Button
          color="primary"
          variant="fab"
          size="small"
          style={{'backgroundColor': '#DAF7A6'}}
          onClick={() => props.onPropChange({ brushCol: '#DAF7A6' })}
        >
        </Button>
      </Col>
      <Col md='6'>
        <Button
          color="primary"
          variant="fab"
          size="small"
          style={{'backgroundColor': '#FFC300'}}
          onClick={() => props.onPropChange({ brushCol: '#FFC300' })}
        >
        </Button>
      </Col>
      <Col md='6'>
        <Button
          color="primary"
          variant="fab"
          size="small"
          style={{'backgroundColor': '#C70039'}}
          onClick={() => props.onPropChange({ brushCol: '#C70039' })}
        >
        </Button>
      </Col>
      <Col md='6'>
        <Button
          color="primary"
          variant="fab"
          size="small"
          style={{'backgroundColor': '#9C27B0'}}
          onClick={() => props.onPropChange({ brushCol: '#9C27B0' })}
        >
        </Button>
      </Col>
      <Col md='6'>
        <Button
          color="primary"
          variant="fab"
          size="small"
          style={{'backgroundColor': '#FFF176'}}
          onClick={() => props.onPropChange({ brushCol: '#FFF176' })}
        >
        </Button>
      </Col>
      <Col md='6'>
        <Button
          color="primary"
          variant="fab"
          size="small"
          style={{'backgroundColor': '#000000'}}
          onClick={() => props.onPropChange({ brushCol: '#000000' })}
        >
        </Button>
      </Col>
    </Row>
  );
}
export default ToolBox;
