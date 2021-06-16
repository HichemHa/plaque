import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function LogoRegDet({ reg }) {
    const cDep = useSelector(state => state.palqReducer.cDep) || "";
    return (
        <div style={{ color: "white" }}>
         
        </div>
    )
}

export default LogoRegDet


























//     const imgs ={
//         link:null
//     }
//     const [img, setImge] = useState('');
//     console.log(reg)
//     console.log(regselected);
//     let xxxx ="";
//    if (!reg){
//        return null;
//    }else{
//      xxxx = reg.filter((el)=>el.nom==regselected).map((e)=>e.code).toString() ;
//      console.log(xxxx)
//    }
//     // const xxxx = reg.filter((el)=>el.nom==regselected).map((e)=>e.codeRegion) ;
//     switch (xxxx) {
//         case '01', '03', '07', '15', '25', '38', '42', '43', '63', '69', '73', '74':
//             return{
//                 ...imgs,
//                 link : '/plaq-images/1.png'
//             }
         

//         case '21', '25', '39', '58', '70', '71', '89', '90':
//             setImge('/plaq-images/bourgogne1.png');

//         default:
//             return imgs;
            
//     }
//     console.log('image',imgs)