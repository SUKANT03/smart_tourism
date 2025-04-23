import React, { useState, useEffect, useRef } from 'react';
import{useLocation, useNavigation} from'react-router-dom';

import './New.css'; 

function Profile(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [DialCode, setDialCode] = useState('');
  const [contact, setContact] = useState("")
  const [isTagVisible, setIsTagVisible] = useState(false);
  const tagRef = useRef(null);
  const location=useLocation()

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (tagRef.current && !tagRef.current.contains(event.target)) {
        setIsTagVisible(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleTagClick = () => {
    setIsTagVisible(!isTagVisible);
  } 
  return (
    <div>
      <button onClick={handleTagClick}>Toggle Tag</button>
      {isTagVisible && (
        <div className="floating-tag" ref={tagRef}>
          <div>
      <h2>Profile</h2>
      <p>Name&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: {}</p> 
      <p>Email&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;: {name}</p>
      <p>Contact number&ensp;: {name}</p>
      <p>Country      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; : {name}</p>

    </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
