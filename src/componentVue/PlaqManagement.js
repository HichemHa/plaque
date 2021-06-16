import React, { useState } from 'react'
import { Col, Button, Nav, Row, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addMat, addPays, adddep, changeCL, changeCM, changeT } from './../JS/actions/index';
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

    const handelSubmitdep = () => {
        dispatch(adddep(dep))
    }
    const [colL, setcolL] = useState('');
    const handelSubmitcoll = () => {
        dispatch(changeCL(colL))
    }
    const handelSubmitcollreset = () => {
        dispatch(changeCL("#0000ff"))
    }
    const [colM, setcolM] = useState('');
    const handelSubmitcolm = () => {
        dispatch(changeCM(colM))
    }
    const handelSubmitcolmreset = () => {
        dispatch(changeCM("#ffffff"))
    }
    const [colT, setcolT] = useState('');
    const handelSubmitcolt = () => {
        dispatch(changeT(colT))
    }
    const handelSubmitcoltreset = () => {
        dispatch(changeT("#000000"))
    }

    return (
        <>
            <div className="Container" >
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
                        <Row style={{ background: "#d8d6d6", margin: "10px", padding: "10px" }}>
                            <Col >
                                <div style={{
                                    display: "flex", alignItems: "center", justifyContent: "flex-start"
                                }}>
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
                        <Row style={{ background: "gray", margin: "10px", padding: "10px" }}>
                            <Col>
                                <div style={{
                                    display: "flex", alignItems: "center", justifyContent: "flex-start"
                                }}>
                                    <p>departement:</p>
                                    <input type="Number" maxLength="2" onChange={(e) => setDep(e.target.value.toLocaleUpperCase())} />
                                </div>
                            </Col>
                            <Col xs lg="2"> <Button onClick={handelSubmitdep}>submit</Button> </Col>
                        </Row>

                    </Col>
                    <Col>
                        <Row style={{ background: "#d8d6d6", margin: "10px", padding: "10px" }}>
                            <Col>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                    <p>change color lateral:</p>
                                    <input type="color" id="head" name="head"
                                        defaultValue="#0000ff" onChange={(e) => setcolL(e.target.value)} />
                                </div>
                            </Col>
                            <Col xs lg="2"> <Button onClick={handelSubmitcoll}>submit</Button> </Col>
                            <Col xs lg="2"> <Button onClick={handelSubmitcollreset}>reset</Button> </Col>
                        </Row>
                        <Row style={{ background: "#d8d6d6", margin: "10px", padding: "10px" }}>
                            <Col>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                    <p>change color text:</p>
                                    <input type="color" id="head" name="head"
                                        defaultValue="#000000" onChange={(e) => setcolT(e.target.value)} />
                                </div>
                            </Col>
                            <Col xs lg="2"> <Button onClick={handelSubmitcolt}>submit</Button> </Col>
                            <Col xs lg="2"> <Button onClick={handelSubmitcoltreset}>reset</Button> </Col>
                        </Row>
                        <Row style={{ background: "#d8d6d6", margin: "10px", padding: "10px" }}>
                            <Col>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                    <p>change color middle:</p>
                                    <input type="color" id="head" name="head"
                                        defaultValue="#ffffff" onChange={(e) => setcolM(e.target.value)} />
                                </div>
                            </Col>
                            <Col xs lg="2"> <Button onClick={handelSubmitcolm}>submit</Button> </Col>
                            <Col xs lg="2"> <Button onClick={handelSubmitcolmreset}>reset</Button> </Col>
                        </Row>
                    </Col>
                </Row>

            </div>
        </>
    )
}

export default PlaqManagement
