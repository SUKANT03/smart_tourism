import './book.css'
import { useLocation, useNavigation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

function Book() {
  const [isTagVisible, setIsTagVisible] = useState(false);
  const tagRef = useRef(null);
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
<div className='bg'>      
    <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <title>Smart Tourism</title>
      {/*===========Nav Bar=================*/}
      <header className="nav-bar">
        <div className="logo">Smart Tourism</div>
        <ul className="menu">
        <li><a href="home">home</a></li>
          <li><a href="book">Booking</a></li>
          <li><a href="https://buildai.space/app/travel-mate-smart">Plan</a></li>
          <li><a href="about">About us</a></li>
          <li><a onClick={handleTagClick}>PROFILE</a></li>
          {isTagVisible && (
            <div className="floating-tag" ref={tagRef}>
              <div>
                <h2>Profile</h2>
                <p>Name&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: { }</p>
                <p>Email&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;: { }</p>
                <p>Contact number&ensp;: { }</p>
                <p>Country   &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; : { }</p>
                <li><a href="details">CLICK HERE TO LOGOUT</a></li>
              </div>
            </div>
          )}
        </ul>
      </header>
      <div className='sc'>
      <section className="places">
        <div className="cards">
          <div className="card">
            <div className="zoom-img">
              <div className="img-card">
                <img src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600" />
              </div>
            </div>
            <div className="text">
              <div className="card-box">
                <button className='plan'><a href="https://www.opentable.com/" className='plan'>🚆RESTAURANTS</a></button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="zoom-img">
              <div className="img-card">
                <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600" />
              </div>
            </div>
            <div className="text">
              <div className="card-box">
                <button className='plan'><a href="https://www.skyscanner.co.in/hotels" className='plan'>🛏️ACCOMUDATIONS</a></button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="zoom-img">
              <div className="img-card">
                <img src="https://images.pexels.com/photos/3769118/pexels-photo-3769118.jpeg?auto=compress&cs=tinysrgb&w=600" />
              </div>
            </div>
            <div className="text">
              <div className="card-box">
                <button className='plan'><a href="https://www.expedia.co.in/Flights" className='plan'>✈️FLIGHT</a></button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="zoom-img">
              <div className="img-card">
                <img src="https://images.pexels.com/photos/28614/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" />
              </div>
            </div>
            <div className="text">
              <div className="card-box">
                <button className='plan'><a href="https://www.easemytrip.com/railways" className='plan'>🚆TRAIN</a></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};
export default Book;

