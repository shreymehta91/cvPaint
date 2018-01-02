import React, { Component } from 'react';

export default class ReactPaint extends Component {
  static defaultProps = {
    className: 'react-paint',
    style: {},
    height: 500,
    width: 500,
    brushCol: '#ff6347',
    lineWidth: 10,
    onDraw: () => {},
    clear: 0
  };

  constructor(...props) {
    super(...props);

    this.state = {
      mouseDown: false,
      mouseLoc: [0, 0]
    };
  }
  loadImage = () => {
    const image = new Image();
    image.src = this.props.img.path;
    image.onload = () => {
      this.canvas
        .getContext('2d')
        .drawImage(image, 0, 0, this.props.width, this.props.height);
    };
  };
  componentDidMount() {
    const { brushCol, lineWidth } = this.props;
    this.context = this.canvas.getContext('2d');
    this.context.moveTo(0, 0);
    this.context.lineWidth = lineWidth;
    this.context.strokeStyle = brushCol;
    this.context.lineJoin = this.context.lineCap = 'round';
    this.canvasBound = this.canvas.getBoundingClientRect();
    if (this.props.img) {
      this.loadImage();
    }
  }

  componentWillUpdate(nextProps) {
    this.context = this.canvas.getContext('2d');
    this.context.closePath();
    this.context.beginPath();
    const { brushCol, lineWidth, clear } = this.props;
    if (clear !== nextProps.clear) {
      this.context.clearRect(0, 0, this.props.width, this.props.height);
      if (this.props.img) {
        this.loadImage();
      }
    }

    if (brushCol !== nextProps.brushCol || lineWidth !== nextProps.lineWidth) {
      this.context.moveTo(0, 0);
      this.context.lineWidth = nextProps.lineWidth;
      this.context.strokeStyle = nextProps.brushCol;
    }
  }

  mouseDown = e => {
    this.context = this.canvas.getContext('2d');
    if (!this.state.mouseDown) this.setState({ mouseDown: true });

    this.setState({
      mouseLoc: [e.pageX || e.touches[0].pageX, e.pageY || e.touches[0].pageY]
    });
    this.context.moveTo(
      (e.pageX || e.touches[0].pageX) - this.canvasBound.left,
      (e.pageY || e.touches[0].pageY) - this.canvasBound.top
    );
  };

  mouseUp = () => this.setState({ mouseDown: false });

  mouseMove = e => {
    this.context = this.canvas.getContext('2d');
    if (this.state.mouseDown) {
      if (e.touches) e.preventDefault();
      if (
        (e.pageX || e.touches[0].pageX) > 0 &&
        (e.pageY || e.touches[0].pageY) - this.canvasBound.top < this.props.height
      ) {
        this.context.lineTo(
          (e.pageX || e.touches[0].pageX) - this.canvasBound.left,
          (e.pageY || e.touches[0].pageY) - this.canvasBound.top
        );

        this.context.stroke();
      }
    }
  };

  render() {
    const { width, height, onDraw, style, className } = this.props;

    return (
      <div className={className}>
        <canvas
          ref={c => (this.canvas = c)}
          className={`${className}__canvas`}
          width={width}
          height={height}
          onClick={onDraw}
          style={Object.assign({}, style, {
            width: this.props.width,
            height: this.props.height
          })}
          onMouseDown={this.mouseDown}
          onTouchStart={this.mouseDown}
          onMouseUp={this.mouseUp}
          onTouchEnd={this.mouseUp}
          onMouseMove={this.mouseMove}
          onTouchMove={this.mouseMove}
        />
      </div>
    );
  }
}

export { ReactPaint };
