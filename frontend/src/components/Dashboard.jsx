import { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile';

/*
  The top-level component containing everything relevant to the dashboard,
  including information on each partner
*/
function Dashboard() {

  const [partners, setPartners] = useState({});
  const [formState, setFormState] = useState({
    name: '',
    thumbnailUrl: '',
    description: '',
    active: false,
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [error, setError] = useState('');

  // Load all partners on initial page load 
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => setPartners(data))
  }, []);

  function handleDelete(partnerId) {
    fetch(`http://localhost:4000/${partnerId}`, {
      method: 'DELETE',
    })
    .then((res) => {
      if (res.status === 200) {
        setPartners(function(prevPartners) {
          const updatedPartners = { ...prevPartners };
          delete updatedPartners[partnerId];
          return updatedPartners;
        });
      }
    })
  };

  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;
    setFormState(function(prevFormState) {
      return {
        ...prevFormState,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  function handleAddPartner() {
    if (!formState.name || !formState.thumbnailUrl || !formState.description) {
      setError('*Must fill out all fields');
      return;
    }

    fetch('http://localhost:4000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    })
    .then((res) => res.json())
    .then((data) => {
      setPartners(function(prevPartners){
        return {
          ...prevPartners,
          [data.id]: data.partner,
        };
      });
      setFormState({
        name: '',
        thumbnailUrl: '',
        description: '',
        active: false,
      });
      setError('');
    });
  };

  function toggleFormVisibility() {
    setIsFormVisible(!isFormVisible);
  }

  return (
    <div id="main-content">
      <div id="top-section">
        <button id="form-button" onClick={toggleFormVisibility}>
          {isFormVisible ? ' - Add Partner Info' : 'Add Partner Info'}
        </button>

        {isFormVisible && (
          <div id="form-section">
            <input
              type="text"
              name="name"
              placeholder="Partner Name"
              value={formState.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="thumbnailUrl"
              placeholder="Partner Logo Source"
              value={formState.thumbnailUrl}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              placeholder="Partner Description"
              value={formState.description}
              onChange={handleInputChange}
              rows={7}
            />
            <label>
              Active?
              <input
                type="checkbox"
                name="active"
                checked={formState.active}
                onChange={handleInputChange}
              />
            </label>
            <button id="submit-button" onClick={handleAddPartner}>Submit</button>
            {error && <p style={{color: 'red' }}>{error}</p>}
          </div>
        )}
      </div>

      <div id="main-partners-grid">
        {Object.keys(partners).map(function(partnerKey) {
          return (
            <PartnerTile 
              key={partnerKey} 
              partnerData={partners[partnerKey]}
              onDelete={() => handleDelete(partnerKey)} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;