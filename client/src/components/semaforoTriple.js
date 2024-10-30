import React from 'react';

const SemaforoTriple = ({ total, abiertos, resueltos }) => {

    let medioTotal = total / 2;
    let diferencia = abiertos - resueltos;

    let color;
    
    if(medioTotal < abiertos && diferencia != 0){
        color = 'yellow';
    }
    if(medioTotal > abiertos){
        color = 'red';
    }
    if(medioTotal < abiertos && diferencia == 0){
        color = 'green';
    }

    const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: color,
    };

    return <div style={styles}></div>;
};

export default SemaforoTriple;