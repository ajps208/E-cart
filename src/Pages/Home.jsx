import React from 'react'
import {Col, Row} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../Redux/Slice/wishlist';

function Home() {
  const data=useFetch("https://dummyjson.com/products")
  // console.log(data);
  const dispatch=useDispatch()
  return (
    <div  style={{marginTop:"100px" ,overflowX:"hidden"}}>
      <Row className='ms-5'>
       {data?.length>0?data.map((products,index)=>( <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card className='shadow rounded' style={{ width: '18rem',height:"28rem" }}>
      <Card.Img height={'200px'} variant="top" src={products?.thumbnail}/>
      <Card.Body>
        <Card.Title>{products?.title}</Card.Title>
        <Card.Text>
        <p>{products?.description.slice(0,55)}...</p>
        <p className='fw-bold'>$ {products?.price}</p>
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button className='btn btn-light' onClick={()=>dispatch(addToWishlist(products))}><i className="fa-solid fa-heart text-danger fa-2x"></i></Button>
          <Button className='btn btn-light'><i className="fa-solid fa-cart-shopping fa-2x"></i></Button>
        </div>
      </Card.Body>
    </Card>
        </Col>)):<p className='text-danger'>Nothing to dispaly</p>}
      </Row>
    </div>
  )
}

export default Home