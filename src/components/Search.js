import React, { useState, useEffect } from 'react'
import "./style.css"
import Restaurant from './Restaurant'
import './Headerstyle.css'
import Details from './Details'

import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import Slideimg from './Slideimg'
import { Card, Pagination } from 'react-bootstrap'

const Search = ({ data }) => {

    const [rdata, setRdata] = useState(Restaurant);
    const [copydata, setCoppyData] = useState([]);
    const [click, setClick] = useState(false);

    const handeClick = () => setClick(!click);

    const changeData = (e) => {
        let getchangedata = e.toLowerCase();

        if (getchangedata === "") {
            setCoppyData(rdata);
        } else {
            let storedata = copydata.filter((ele, k) => {
                return ele.name.toLowerCase().match(getchangedata);
            })
            setCoppyData(storedata)
        }
    }

    const profile = "profile"

    useEffect(() => {

        setTimeout(() => {
            setCoppyData(Restaurant);
        }, 3000)


    }, [])


    return (


        <>


            {/* Header */}
            <div className="header" >
                <div className='header_con'>
                    <img className='mb-3' src={profile} style={{ width: "32px", height: "32px", position: 'relative', left: "85%", }} alt="" ></img>
                    <h2 className='mb-3' style={{ cursor: "pointer", right: "10%", position: 'relative' }} >Test</h2>
                </div>
            </div>
            {/* Form ช่องกรอกคำค้น */}
            <div className="fromcon  align-items-center ">
                <Form className="confilter d-flex justify-content-center align-item-center mt-3 " >
                    <h2>Place List</h2>
                    {/* dropdowfilter ร้านอาหาร คาเฟ่ */}
                    <Form.Select className='mb-5 mx-2 ' controlId="fromBasicEmail" style={{ width: "120px" }}>
                        <option>Cafe</option>
                        <option>Cafe</option>
                    </Form.Select>
                    {/* Searchbar */}
                    <Form.Group className='mb-10 ' controlId="fromBasicEmail" >
                        <Form.Control type='text'
                            onChange={(e) => changeData(e.target.value)}
                            placeholder='Search Name'></Form.Control>
                    </Form.Group>
                </Form>
            </div>
            {/**Column Cards */}
            <div className="container">
                <div class="row ">
                    <section className='btn-container mb-10 mx-1   '>
                        <div href="#" className="row mt-1 justify-content-around  align-items-center ">
                        
                                {copydata && copydata.length ? <Cards data={copydata} /> : "empty"}

                            


                        </div>
                    </section>
                </div>
            </div>



        </>


    )
}


export default Search