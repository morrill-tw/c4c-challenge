import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile({ partnerData, onDelete }) {

  return (
    <div className="partner-tile">
      <img className="partner-thumbnail" src={partnerData.thumbnailUrl} alt={partnerData.name} />
      <hr />
      <div className="partner-info">
        <h2>{partnerData.name}</h2>
        <HandleActive active={partnerData.active} />
        <p>{partnerData.description}</p>
        <button id="delete-button" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

function HandleActive({ active }) {
  if (active) {
    return <h3 id="active">Active</h3>
  } else {
    return <h3 id>Inactive</h3>
  }
}

export default PartnerTile;