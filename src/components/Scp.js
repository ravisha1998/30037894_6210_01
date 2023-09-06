import React from 'react';
import './scp.css';

function Scp({ scp }) {
  return (
    <div className="component container">
      <h1>{scp.model}</h1>

      <img src={scp.image} alt={scp.model} style={{ maxWidth: '50%', height: 'auto' }} />
     
      <h2>Class: {scp.object_class}</h2>
      <p>
        <b>Especial Containment Procedure: </b>
        {scp.special_containment_procedures}
      </p>
      <p>
        <b>Description: </b>
        {scp.description}
      </p>
     
    </div>
  );
}

export default Scp;
