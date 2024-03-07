import React from 'react'
import store from '../Redux/store'
import { Store } from '@reduxjs/toolkit'
import { addToWishlist, deleteFromWishlist } from '../Redux/slices/Wishlist'
import { wishlistReducer } from '../Redux/store'
import { useDispatch, useSelector } from 'react-redux'

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple
} from 'mdb-react-ui-kit';
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { addToCart } from '../Redux/slices/cartslice'

function Wishlist() {

    const dispatch = useDispatch()
    const wishlistArray = useSelector((state) => state.wishlistReducer)
    console.log(wishlistArray);

    const handleAddToCart=(item) =>{
        //add to cart
        dispatch(addToCart(item))
        //remove from wishlist
       dispatch(deleteFromWishlist(item.id)) 
    }

    return (
        <div style={{marginTop:'10%'}}>
            <Row>
                {
                    wishlistArray?.length > 0 ? wishlistArray.map(item => (
                        <Col>
                            <MDBCard style={{ width: '300px', height: '400px',backgroundColor:'black',color:'white' }} className='m-3 shadow'>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src={item.thumbnail} style={{ width: '100%', height: '250px' }} fluid alt='...' />
                                    <a>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                    </a>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle className='text-center'>{item.title}</MDBCardTitle>
                                    <MDBCardText className='text-center'>
                                        Rs: {item.price}/-
                                    </MDBCardText>
                                    <div className='d-flex justify-content-evenly'>
                                        <button onClick={()=>dispatch(deleteFromWishlist(item.id))} className='btn'><i className='fa-solid fa-trash text-danger fs-2'></i></button>
                                        <button onClick={()=>handleAddToCart(item)} className='btn'><i className='fa-solid fa-cart-plus text-success fs-2'></i></button>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                    )):
                    <div className='text-center'>
                        <img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="" />
                        <h4>Back to Home</h4>
                        <Link to={'/'}>
                        <button className='btn btn-primary m-4'>Home</button>
                        </Link>
                    </div>
                }
            </Row>
        </div>
    )
}

export default Wishlist