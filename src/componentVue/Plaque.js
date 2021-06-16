import React from 'react'
import { Container, Row } from 'react-bootstrap';
import './styleplaq.css'
import PlaqManagement from './PlaqManagement';
import { useSelector } from 'react-redux'
function Plaque() {
    const pays = useSelector(state => state.palqReducer.pays);
    const dep = useSelector(state => state.palqReducer.dep);
    const mat = useSelector(state => state.palqReducer.mat) || "";
    const colL = useSelector(state => state.palqReducer.colorL) || "";
    const colM = useSelector(state => state.palqReducer.colorM) || "";
    const colT = useSelector(state => state.palqReducer.colorT) || "";

    return (
        <Container style={{ marginTop: "50px" }}>
            <Row className="justify-content-md-center">
                <div className="all-plaq" style={{backgroundColor:`${colM}`}}>
                    <div className="left-part" style={{backgroundColor:`${colL}`}}>
                        <div className="left-part-euro">
                            <img className="img-euro" src="/plaq-images/euro-starts.png" />
                        </div>
                        <div className="left-part-country">
                            {pays}
                        </div>
                    </div>
                    <div className="middle-part" style={{color:`${colT}`}}>
                        {mat.marticule1}-{mat.marticule2}-{mat.marticule3}
                    </div> 
                    <div className="right-part" style={{backgroundColor:`${colL}`}}> 
                        <div className="right-part-logo">
                            logo
                        </div>
                        <div className="right-part-dep">
                            {dep}
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
                <PlaqManagement />
            </Row>
        </Container>
    )
}

export default Plaque
