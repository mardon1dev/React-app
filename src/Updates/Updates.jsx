import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import UpdateImg from './updateimg.png';

import '../Scss/main.css';

const Updates = () => {
  return (
    <div className='update-wrapper'>
    <div className='container'>
        <div className='updates pb-5'>
            <h6 className='updates-h6 pt-5 text-center'>News</h6>
            <h3 className='updates-h3 pt-5 text-center'>Gerícht updates</h3>
        <Row className='pt-5 justify-content-center'>
        <Col xs={12} sm={6} md={4}>
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={UpdateImg} />
      <Card.Body>
        <Card.Title>Tips for prepping and caring for your grill</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <a className="updates-link" href="#">Read more</a>
        <p className='updates-span'>16 Apr 2021</p>
        </div>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={UpdateImg} />
      <Card.Body>
        <Card.Title>Tips for prepping and caring for your grill</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <a className="updates-link" href="#">Read more</a>
        <p className='updates-span'>16 Apr 2021</p>
        </div>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className>
        <Card style={{ width: '100%' }} className="">
      <Card.Img variant="top" src={UpdateImg} />
      <Card.Body>
        <Card.Title>Tips for prepping and caring for your grill</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <a className="updates-link" href="#">Read more</a>
        <p className='updates-span'>16 Apr 2021</p>
        </div>
      </Card.Body>
    </Card>
        </Col>
      </Row>
        <div className='d-flex align-items-center justify-content-center pt-5'>
        <a className='updates-view text-center ' href="#">View more</a>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Updates;