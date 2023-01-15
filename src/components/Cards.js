import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link, Router } from "react-router"
import Details from './Details'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Restaurant from './Restaurant'
import Images from './Images'


const Cards = ({ data }) => {




    return (

        <  >
            {
                data.map((element, k) => {
                    return (<>

                        <Card variant="primary" style={{ width: '400px', height: '240px', }} className="hove mb-4" >


                            <div className='card_body '     >
                                <div className='upper_data  '>
                                    {/**Profile Resturant */}
                                    <Card.Img className='cd ' src={element.profile_image_url}
                                        style={{ width: "60px", height: "60px" }} />

                                    <div className='containernameres'>
                                        {/**Layout NameResturant */}
                                        <div className='lower_data  m-1'>
                                            <h4>{element.name}</h4>
                                        </div >
                                        {/**Layout Timeandrating  */}
                                        <div className='condetails  d-flex '>
                                            <span >time</span>
                                            <span className="rating" >{element.rating}</span>
                                        </div>
                                    </div>



                                </div>
                                {/**Layout Picture Details */}
                                <div className='imgview '>
                                    <Card.Img src={element.images} style={{ width: "120px", height: "120px" }} />
                                    <Card.Img src={element.images} style={{ width: "120px", height: "120px" }} />
                                    <Card.Img src={element.images} style={{ width: "120px", height: "120px" }} />


                                </div>




                            </div>
                        </Card>

                    </>)
                })
            }

        </>
    )
}

export default Cards