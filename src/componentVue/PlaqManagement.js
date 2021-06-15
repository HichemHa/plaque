import React, { useState } from 'react'
import { Col, Button, Nav, Row, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addMat, addPays, adddep } from './../JS/actions/index';
import './styleplaq.css';

function PlaqManagement() {
    const [pays, setPays] = useState('');

    const [marticule1, setMatricule1] = useState();
    const [marticule2, setMatricule2] = useState();
    const [marticule3, setMatricule3] = useState();

    const [dep, setDep] = useState('');

    const dispatch = useDispatch();
    const handelSubmit = () => {
        dispatch(addPays(pays))
    }
    const handelSubmitmat = () => {
        dispatch(addMat({ marticule1, marticule2, marticule3 }))
    }

    console.log('dep', dep)
    const handelSubmitdep = () => {
        dispatch(adddep(dep))
    }

    return (
        <>

            <div className="Container">
                <Row>
                    <Col>
                        <Row style={{ background: "gray", margin: "10px", padding: "10px" }}>
                            <Col>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                    <p>Pays:</p>
                                    <input type="text" maxLength="1" onChange={(e) => setPays(e.target.value.toLocaleUpperCase())} />
                                </div>

                            </Col>
                            <Col xs lg="2"> <Button onClick={handelSubmit}>submit</Button> </Col>
                        </Row>
                        <Row style={{ background: "#d8d6d6", margin: "10px", padding: "10px"  }}>
                            <Col >
                                <div style={{
                                    display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                        < p > marticule</p>
                                    <div>
                                    <input type="text" maxLength="2" onChange={(e) => setMatricule1(e.target.value.toLocaleUpperCase())} />
                                    <input type="Number" maxLength="3" onChange={(e) => setMatricule2(e.target.value)} />
                                    <input type="text" maxLength="2" onChange={(e) => setMatricule3(e.target.value.toLocaleUpperCase())} />
                                </div>
                                </div>


                            </Col>
                        <Col xs lg="2"> <Button onClick={handelSubmitmat}>submit</Button> </Col>
                        </Row>
                    <Row style={{ background: "gray", margin: "10px", padding: "10px"  }}>
                        <Col>
                            <div style={{
                                    display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                            <p>departement:</p>  
                            <input type="Number" maxLength="2" onChange={(e) => setDep(e.target.value.toLocaleUpperCase())} />
                            </div>
                        </Col>
                        <Col xs lg="2"> <Button onClick={handelSubmitdep}>submit</Button> </Col>
                    </Row>

                    </Col>
                <Col>
                    test
                </Col>
                </Row>

        </div>
        </>
    )
}

export default PlaqManagement
