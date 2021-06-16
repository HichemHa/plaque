import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import axios from "axios"
import LogoRegDet from './LogoRegDet';
import { useDispatch } from 'react-redux';
import { choosedep } from '../JS/actions';


function LogoReg() {
    const [reg, setReg] = useState()
    const [regselected, setRegselected] = useState("")
    useEffect(() => {
        axios.get(`https://geo.api.gouv.fr/departements`)
            .then(res => {
                const x = res.data;
                setReg(x);
            })

    }, [])

    const disptach = useDispatch()
    // console.log('regselected',regselected)
    return (
        <>
            <Container>
                <div>
                    <select name="select" onChange={(e) => setRegselected(e.target.value)} >
                        <option></option>
                        {!reg ? "" : reg.map((el, index) => <option>{el.nom} </option>)}
                    </select>
                    <Button onClick={() => disptach(choosedep(regselected))}>submit</Button>
                </div>
                {/* <LogoRegDet reg={reg} /> */}
            </Container>
        </>
    )
}

export default LogoReg
