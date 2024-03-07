import React, { useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const [openNavSecond, setOpenNavSecond] = useState(false);
    const wishlistArray = useSelector((state) => state.wishlistReducer)
    const carttArray = useSelector((state) => state.cartReducer)



    return (
        <div >
            <MDBNavbar expand='lg'  fixed='top' style={{backgroundColor:'black',color:'white'}}>
                <MDBContainer fluid >
                    <i className='fa-solid fa-cart-plus fs-2 m-2'></i>
                    <MDBNavbarBrand href='/'><span style={{color:'white',fontWeight:'bold'}}>SHOP N SHOP</span></MDBNavbarBrand>
                    <MDBNavbarToggler
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setOpenNavSecond(!openNavSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar open={openNavSecond}>
                        <MDBNavbarNav style={{marginLeft:'1000px'}}>
                            <Link to={'/wishlist'}>
                            <MDBNavbarLink active aria-current='page'>
                                <i className='fa-solid fa-heart text-danger fs-2'></i>
                                <Badge pill bg="danger">{wishlistArray.length}</Badge>
                            </MDBNavbarLink>
                            </Link>

                            <Link to={'/cart'}>
                            <MDBNavbarLink href='/cart'><i className='ms-5 fa-solid fa-cart-plus text-success fs-2'></i>
                            <Badge pill bg="success">{carttArray.length}</Badge>
                            </MDBNavbarLink>
                            </Link>

                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>

        </div>
    )
}

export default Header