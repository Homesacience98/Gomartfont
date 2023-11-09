import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function Quickyarn() {
  return (
    <Card>
      <Card.Header href="/" style={{backgroundColor:'#bebebe'}} ><Nav.Link href="/">Gomart</Nav.Link></Card.Header>
      <Card.Body style={{backgroundColor:''}}>
        <blockquote className="blockquote mb-0">
          {/* <p>
            {' '}
           {' '}
          </p> */}
          <footer className="blockquote-footer">
          <h6> 20% off sales <cite title="Source Title">Shop🛒</cite></h6> 
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Quickyarn;