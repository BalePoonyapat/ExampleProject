import React from 'react'
import Card from 'react-bootstrap/Card'
import Restaurant from './Restaurant'
import { motion } from 'framer-motion'
import { useState,useRef,useEffect } from 'react'

const Slideimg = ({ data }) => {
    return (

        <div className='slide'>
            <motion.div className='carousel'>
                <motion.div className='in-carousel'>
                    
                </motion.div>
            </motion.div>
        </div>




    )
}

export default Slideimg
