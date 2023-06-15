import './MainScreen.css'
import { Col, Row } from 'antd';

function MainScreen() {
  return (
    <div className='main-wrapper'>
    <Row gutter={24}>
    <Col span={12}>
      Date
    </Col>
    <Col span={12}>
      <Row>
        <Col>1</Col>
        <Col>1</Col>
      </Row>
      <Row>
      <Col>1</Col>
        <Col>1</Col>
      </Row>
    </Col>
    </Row>
  </div>
  )
}

export default MainScreen