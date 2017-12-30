import React from 'react';
import {Button, Row, Col} from 'muicss/react';
import Slider from 'rc-slider/lib/Slider';
import ColorPicker from './ColorPicker'
import 'rc-slider/assets/index.css';
const ToolBox = (props) => {
  return (
    <div> 
      <Row>
        <Col md='12' className="mui--text-accent mui--text-subhead">Brush Color</Col>
      </Row>
      <ColorPicker onColorChange={(color) => props.onPropChange({brushCol: color})}/>
      <Row style={{'marginTop':'20px'}}>
        <Col md='12' className="mui--text-accent mui--text-subhead">Brush Thickness</Col>
      </Row>
      <Slider min={0} max={10} defaultValue={3} onAfterChange = {(data) => props.onPropChange({ lineWidth: data })}/>
      <Row style={{'marginTop':'20px'}}>
        <Col md='12' className="mui--text-accent mui--text-subhead">Background Color</Col>
        <ColorPicker onColorChange={(color) => props.onPropChange({style: {background: color}})}/>
      </Row>
      <Row>
        <Button color="danger" onClick={() => props.onPropChange({clear: props.clear+1})}>Clear</Button>
      </Row>
    </div>
  );
}
export default ToolBox;
