import React, { Component } from 'react';
import ReactPaint from './PaintArea';
import ToolBox from './ToolBox';
import images from '../imageApi';

class PaintCanvas extends Component {
  state = {
    prop: {
      style: {
        background: 'tomato'
        /* Arbitrary css styles */
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
      <div className="hello-world">
        <ReactPaint {...this.state.prop} />
        <ToolBox onPropChange={this.onPropChange.bind(this)} />
      </div>
    );
  }
}
export default PaintCanvas;
