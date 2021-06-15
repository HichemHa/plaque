import React from 'react'
import { Container, Row } from 'react-bootstrap';
import './styleplaq.css'
import PlaqManagement from './PlaqManagement';
import { useSelector } from 'react-redux'
function Plaque() {
    const pays = useSelector(state => state.palqReducer.pays);
    const dep = useSelector(state => state.palqReducer.dep);
    const mat = useSelector(state => state.palqReducer.mat) || "";
    return (
        <Container style={{ marginTop: "50px" }}>
            <Row className="justify-content-md-center">
                <div className="all-plaq">
                    <div className="left-part">
                        <div className="left-part-euro">
                            <img className="img-euro" src="/plaq-images/euro-starts.png" />
                        </div>
                        <div className="left-part-country">
                            {pays}
                        </div>
                    </div>
                    <div className="middle-part">
                        {mat.marticule1}-{mat.marticule2}-{mat.marticule3}
                    </div>
                    <div className="right-part">
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
