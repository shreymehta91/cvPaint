import React, { Component } from 'react';
import ReactPaint from './PaintArea';
import ToolBox from './ToolBox';
import images from '../imageApi';
import {Row, Col, Button} from 'muicss/react'

class PaintCanvas extends Component {
  state = {
    prop: {
      style: {
        background: 'tomato'
      },
      brushCol: 'yellow',
      lineWidth: 10,
      className: 'react-paint',
      height: 500,
      width: 500,
      img: images[this.props.match.params.paintId]
    }
  };
  onPropChange(newProp) {
    let prop = Object.assign({}, this.state.prop, newProp);
    this.setState({ prop: prop });
  }
  render() {
    return (
      <Row>
        <Col md='6'>
          <ReactPaint {...this.state.prop} />
        </Col>
        <Col md='2'>
          <ToolBox onPropChange={this.onPropChange.bind(this)} />
        </Col>
      </Row>
    );
  }
}
export default PaintCanvas;
