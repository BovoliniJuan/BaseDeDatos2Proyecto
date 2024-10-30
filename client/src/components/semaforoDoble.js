import React from 'react';

const SemaforoDoble = ({ status }) => {
  const color = status === 1 ? 'green' : 'red'; // Verde para 1, rojo para 0

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

export default SemaforoDoble;