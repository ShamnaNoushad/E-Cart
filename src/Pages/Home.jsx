import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple
} from 'mdb-react-ui-kit';
import useFetch from '../Hooks/useFetch';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../Redux/slices/Wishlist';
import { addToCart } from '../Redux/slices/cartslice';

function Home() {

    const data = useFetch('https://dummyjson.com/products')
    console.log(data);
    const dispatch = useDispatch()

    const wishlistArray=useSelector((state)=>state.wishlistReducer)

    const handleAddToWishlist=(item)=>{
        //check if the item is already in the wishlist
        const isItem = wishlistArray.some((wishlistItem)=>wishlistItem.id === item.id)
        if(isItem){
            alert("Item already in wishlist")
        }
        else{
            dispatch(addToWishlist(item))
        }
    }


    return (
        <div>
            <div>
                <img src="https://images.pexels.com/photos/4194167/pexels-photo-4194167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={'100%'} height={'600px'} />
            </div>
            <div className="card">
                <div className="container">
                <Row>
                    {
                        data?.length > 0 ? data.map(item => (
                            <Col>
                                <MDBCard style={{ width: '300px',height:'400px', backgroundColor:'black',color:'white' }} className='m-3 shadow'>
                                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                        <MDBCardImage src={item.thumbnail} style={{width:'100%',height:'250px'}} fluid alt='...' />
                                        <a>
                                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                        </a>
                                    </MDBRipple>
                                    <MDBCardBody>
                                        <MDBCardTitle className='text-center'>{item.title}</MDBCardTitle>
                                        <MDBCardText className='text-center'>
                                        Rs:{item.price}/-
                                        </MDBCardText>
                                        <div className='d-flex justify-content-evenly'>
                                            <button onClick={()=>handleAddToWishlist(item)} className='btn'><i className='fa-solid fa-heart text-danger fs-2 '></i></button>
                                            <button onClick={()=>dispatch(addToCart(item))} className='btn'><i className='fa-solid fa-cart-plus text-success fs-2'></i></button>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </Col>
                        )) : "Not found"
                    }
                </Row>
                </div>
            </div>
        </div>
    )
}

export default Home