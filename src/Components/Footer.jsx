import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBRipple
} from 'mdb-react-ui-kit';

function Footer() {
    return (
        <div>
            <MDBFooter className='text-center text-white' style={{ backgroundColor: 'black' }}>
                <MDBContainer className='p-4'>
                    <section className=''>
                        <MDBRow>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://www.ykra.com/cdn/shop/files/polo42_1024x1024.jpg?v=1697816175' className='w-100' />
                                    <a href='#!'>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </a>
                                </MDBRipple>
                            </MDBCol>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://media.istockphoto.com/id/1178719116/photo/shirt-on-wooden-background.jpg?s=612x612&w=0&k=20&c=aZYQLWTi6-Wc8zRCdF56_z2gRYhv13AE-OdHixLWa8o=' className='w-100' />
                                    <a href='#!'>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </a>
                                </MDBRipple>
                            </MDBCol>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://hips.hearstapps.com/hmg-prod/images/fall18-stance-t-shirts-allloopwheelmerch-1531776846.jpg' className='w-100' />
                                    <a href='#!'>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </a>
                                </MDBRipple>
                            </MDBCol>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://img.freepik.com/photos-premium/white-t-shirt-hanging-on-hanger-with-plant-in-the-background_662214-75582.jpg' className='w-100' />
                                    <a href='#!'>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </a>
                                </MDBRipple>
                            </MDBCol>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://kindsor.com/cdn/shop/collections/The-Vue-Landscape-Tshirt_1600x.jpg?v=1676313664' className='w-100' />
                                    <a href='#!'>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </a>
                                </MDBRipple>
                            </MDBCol>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://img.freepik.com/photos-premium/t-shirts-verts-masculins-photo-realistes-espace-copie-vue-avant-arriere_698214-1976.jpg' className='w-100' />
                                    <a href='#!'>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </a>
                                </MDBRipple>
                            </MDBCol>
                        </MDBRow>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2024 Copyright:
                    <a className='text-white' href='/'>
                       shopnshop.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer