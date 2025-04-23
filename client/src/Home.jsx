import './Home.css';
import { useLocation, useNavigation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const [inputValue, setInputValue] = useState('');
  const [country, setCountry] = useState("")
  const [Flag, setFlag] = useState('');
  const [isTagVisible, setIsTagVisible] = useState(false);
  const tagRef = useRef(null);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
  const minDate = `${currentYear}-${currentMonth.toString().padStart(2, '0')}`;
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
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const buttonUrl = `https://traveltriangle.com/tour-packages/${inputValue}`;
  

  return (
    <div>
       <meta charSet="UTF-8" />
       <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <link rel="stylesheet" href="style.css" />
       <title>Smart Tourism</title>
       <header className="nav-barh">
        <div className="logoh">SMART TOURISM</div>
        <ul className="menu">
          <li><a className='b'href="home">home</a></li>
          <li><a href="book">Booking</a></li>
          <li><a href="https://buildai.space/app/smart-tourism">Plan</a></li>
          <li><a href="about">About us</a></li>
          <li><a className='a' onClick={handleTagClick}>PROFILE</a></li>
          {isTagVisible && (
            <div className="floating-tag" ref={tagRef}>
              <div>
                <h2>Profile</h2>
                <p>Name&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: { }</p>
                <p>Email&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;:{email}</p>
                <p>Contact number&ensp;: { }</p>
                <p>Country   &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; : { }</p>
                <li><a href="login">CLICK HERE TO LOGOUT</a></li>
              </div>
            </div>
          )}
        </ul>
      </header>
          <div style={{
        backgroundImage: `url(bg1.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}>
                <section className="home">
          <div className="banner-text-item">
            <div className="banner-heading">
              <hh>plan your trip here !</hh>
            </div>
            <form className="form">
              <table className="tab">
                <tr>
                  <td>
                    <div>
                      <input
                        type='text'
                        value={inputValue}
                        onChange={handleInputChange}
                        className='text'
                        required
                        onSelect={(e) => setCountry(e.target.value)}      
                        placeholder='Type the city you want to visit !'></input>
                    </div>
                  </td>
                  <td>
                      <input type="month" id="monthInput" placeholder={`${currentYear}-${currentMonth}`} min={minDate} />
                  </td>
                  <td>
                    <button className='plan'><a href={buttonUrl} className='plan' target="_blank" rel="noopener noreferrer">GET PACKAGE</a></button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </section>
        </div>
        <section className="probootstrap_section" id="section-city-guides">
        <h2 className="display-4 border-bottom probootstrap-section-heading">Top Places Around The World</h2>
            <div className="container">
              <div className="row text-center mb-5 probootstrap-animate">
                <div className="col-md-12">
                </div>
              </div>
              <div className="roww">
                <div className="col-lg-3 col-md-6 probootstrap-animate mb-3">
                  <a href="france" className="probootstrap-thumbnail">
                    <img src="https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Free Template by ProBootstrap.com" className="img-fluid" />
                    <div className="probootstrap-text">
                      <h3>FRANCE</h3>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-md-6 probootstrap-animate mb-3">
                  <a href="italy" className="probootstrap-thumbnail">
                    <img src="https://images.pexels.com/photos/4026103/pexels-photo-4026103.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Free Template by ProBootstrap.com" className="img-fluid" />
                    <div className="probootstrap-text">
                      <h3>ITALY</h3>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-md-6 probootstrap-animate mb-3">
                  <a href="spain" className="probootstrap-thumbnail">
                    <img src="https://images.pexels.com/photos/2191136/pexels-photo-2191136.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Free Template by ProBootstrap.com" className="img-fluid" />
                    <div className="probootstrap-text">
                      <h3>SPAIN</h3>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-md-6 probootstrap-animate mb-3">
                  <a href="uk" className="probootstrap-thumbnail">
                    <img src="https://images.pexels.com/photos/14872685/pexels-photo-14872685.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Free Template by ProBootstrap.com" className="img-fluid" />
                    <div className="probootstrap-text">
                      <h3>UK</h3>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-md-6 probootstrap-animate mb-3">
                  <a href="italy" className="probootstrap-thumbnail">
                    <img src="https://images.pexels.com/photos/4026103/pexels-photo-4026103.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Free Template by ProBootstrap.com" className="img-fluid" />
                    <div className="probootstrap-text">
                      <h3>ITALY</h3>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-md-6 probootstrap-animate mb-3">
                  <a href="spain" className="probootstrap-thumbnail">
                    <img src="https://images.pexels.com/photos/2191136/pexels-photo-2191136.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Free Template by ProBootstrap.com" className="img-fluid" />
                    <div className="probootstrap-text">
                      <h3>SPAIN</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        {/* <section className="places">
        <div className="places-text">
          <h2>Top rated location</h2>
        </div>
        <div className="cards">
          <div className="card">
            <div className="zoom-img">
              <div className="img-card">
                <img src="https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=600" />
              </div>
            </div>
            <div className="text">
              <div className="card-box">
                <button className='plan1'><a href="france" className='plan1'> FRANCE</a></button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="zoom-img">
              <div className="img-card">
              <a href="spain">
               <img src="https://images.pexels.com/photos/930595/pexels-photo-930595.jpeg?auto=compress&cs=tinysrgb&w=600" />
              </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="zoom-img">
              <div className="img-card">
                <img src="https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
            <div className="text">
              <div className="card-box">
                <button className='plan1'><a href="usa" className='plan1'> USA</a></button>

              </div>
            </div>
          </div>
          <div className="card">
            <div className="zoom-img">
              <div className="img-card">
                <img src="https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=600" />
              </div>
            </div>
            <div className="text">
              <div className="card-box">
                <button className='plan1'><a href="india" className='plan1'> INDIA</a></button>

              </div>
            </div>
          </div>
          <div className="card">
            <div className="zoom-img">
              <div className="img-card">
                <img src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
            <div className="text">
              <div className="card-box">
                <button className='plan1'><a href="uk" className='plan1'> UNITED KINGDOM</a></button>

              </div>
            </div>
          </div>
          <div className="card">
            <div className="zoom-img">
              <div className="img-card">
                <img src="https://images.pexels.com/photos/16662538/pexels-photo-16662538/free-photo-of-verona-arts-town.jpeg?auto=compress&cs=tinysrgb&w=600" />
              </div>
            </div>
            <div className="text">
              <div className="card-box">
                <button className='plan1'><a href="italy" className='plan1'> ITALY</a></button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="footer">
        <div className="container">
          <div className="row1">
            <div className="column">
              <div className="links">
                <h3><a href="about">About us</a></h3>

                <p>Welcome to our company!</p>
                <p>
                  We are a team of passionate individuals dedicated to providing high-quality products and excellent customer service. With years of experience in the industry, we strive to deliver innovative solutions that meet the needs of our customers.
                </p>
                <p>
                  Our mission is to make a positive impact on people's lives by creating products that enhance their daily routines. We value collaboration, creativity, and continuous improvement. Through our commitment to excellence, we aim to exceed our customers' expectations and build long-lasting relationships.
                </p>
                <p>
                  Thank you for choosing our company. We look forward to serving you and meeting your needs. If you have any questions or feedback, please don't hesitate to reach out to us.
                </p>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="column">
              <div className="links">
                <h1>Contact us on</h1>
                <p>Contact Number&ensp;:📞8778371591</p>
                <p>Email Id&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; :📧smarttourism@gmail.com</p>
                <p>Office Number&ensp;&ensp;&ensp;:☎️04295224256</p>
                <p>Watsapp Number:📱7418834136</p>
                <p>Help line number:  112</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
// import './Home.css';
// import { useLocation, useNavigation } from 'react-router-dom';
// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';

// function Home() {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const email = queryParams.get("email");
  // const [inputValue, setInputValue] = useState('');
  // const [country, setCountry] = useState("")
  // const [Flag, setFlag] = useState('');
  // const [isTagVisible, setIsTagVisible] = useState(false);
  // const tagRef = useRef(null);
  // const currentDate = new Date();
  // const currentYear = currentDate.getFullYear();
  // const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
  // const minDate = `${currentYear}-${currentMonth.toString().padStart(2, '0')}`;

  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (tagRef.current && !tagRef.current.contains(event.target)) {
  //       setIsTagVisible(false);
  //     }
  //   };
  //   document.addEventListener('mousedown', handleOutsideClick);

  //   return () => {
  //     document.removeEventListener('mousedown', handleOutsideClick);
  //   };
  // }, []);

  // const handleTagClick = () => {
  //   setIsTagVisible(!isTagVisible);
  // }
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  // const buttonUrl = `https://traveltriangle.com/tour-packages/${inputValue}`;

//   return (
//     <div>
//       <meta charSet="UTF-8" />
//       <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <link rel="stylesheet" href="style.css" />
//       <title>Smart Tourism</title>
//       {/*===========Nav Bar=================*/}
      // <header className="nav-barh">
      //   <div className="logoh">SMART TOURISM</div>
      //   <ul className="menu">
      //     <li><a href="home">home</a></li>
      //     <li><a href="book">Booking</a></li>
      //     <li><a href="https://buildai.space/app/smart-tourism">Plan</a></li>
      //     <li><a href="about">About us</a></li>
      //     <li><a onClick={handleTagClick}>PROFILE</a></li>
      //     {isTagVisible && (
      //       <div className="floating-tag" ref={tagRef}>
      //         <div>
      //           <h2>Profile</h2>
      //           <p>Name&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: { }</p>
      //           <p>Email&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;: { }</p>
      //           <p>Contact number&ensp;: { }</p>
      //           <p>Country   &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; : { }</p>
      //           <li><a href="login">CLICK HERE TO LOGOUT</a></li>
      //         </div>
      //       </div>
      //     )}
      //   </ul>
      // </header>

//       {/* Home */}
      // <div style={{
      //   backgroundImage: `url(bg.jpg)`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   height: '100vh',
      // }}>
        // <section className="home">
        //   <div className="banner-text-item">
        //     <div className="banner-heading">
        //       <h1>plan your next trip here !</h1>
        //       <p>Email: {email}</p>
        //     </div>
        //     <form className="form">
        //       <table className="tab">
        //         <tr>
        //           <td>
        //             <div>
        //               <input
        //                 type='text'
        //                 value={inputValue}
        //                 onChange={handleInputChange}
        //                 className='text'
        //                 required
        //                 onSelect={(e) => setCountry(e.target.value)}
        //                 placeholder='Type the city you want to visit !'></input>
        //             </div>
        //           </td>
        //           <td>
        //               <input type="month" id="monthInput" placeholder={`${currentYear}-${currentMonth}`} min={minDate} />
        //           </td>
        //           <td>
        //             <button className='plan'><a href={buttonUrl} className='plan' target="_blank" rel="noopener noreferrer">GET PACKAGE</a></button>
        //           </td>
        //         </tr>
        //       </table>
        //     </form>
        //   </div>
        // </section>
//       </div>
//       {/*==============Places===================*/}
      // <section className="places">
      //   <div className="places-text">
      //     <h2>TOP RATED LOCATIONS</h2>
      //   </div>
      //   <div className="cards">
      //     <div className="card">
      //       <div className="zoom-img">
      //         <div className="img-card">
      //           <img src="https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=600" />
      //         </div>
      //       </div>
      //       <div className="text">
      //         <div className="card-box">
      //           <button className='plan1'><a href="france" className='plan1'> FRANCE</a></button>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="card">
      //       <div className="zoom-img">
      //         <div className="img-card">
      //           <img src="https://images.pexels.com/photos/930595/pexels-photo-930595.jpeg?auto=compress&cs=tinysrgb&w=600" />
      //         </div>
      //       </div>
      //       <div className="text">
      //         <div className="card-box">

      //           <button className='plan1'><a href="spain" className='plan1'> SPAIN</a></button>

      //         </div>
      //       </div>
      //     </div>
      //     <div className="card">
      //       <div className="zoom-img">
      //         <div className="img-card">
      //           <img src="https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      //         </div>
      //       </div>
      //       <div className="text">
      //         <div className="card-box">
      //           <button className='plan1'><a href="usa" className='plan1'> USA</a></button>

      //         </div>
      //       </div>
      //     </div>
      //     <div className="card">
      //       <div className="zoom-img">
      //         <div className="img-card">
      //           <img src="https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=600" />
      //         </div>
      //       </div>
      //       <div className="text">
      //         <div className="card-box">
      //           <button className='plan1'><a href="india" className='plan1'> INDIA</a></button>

      //         </div>
      //       </div>
      //     </div>
      //     <div className="card">
      //       <div className="zoom-img">
      //         <div className="img-card">
      //           <img src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      //         </div>
      //       </div>
      //       <div className="text">
      //         <div className="card-box">
      //           <button className='plan1'><a href="uk" className='plan1'> UNITED KINGDOM</a></button>

      //         </div>
      //       </div>
      //     </div>
      //     <div className="card">
      //       <div className="zoom-img">
      //         <div className="img-card">
      //           <img src="https://images.pexels.com/photos/16662538/pexels-photo-16662538/free-photo-of-verona-arts-town.jpeg?auto=compress&cs=tinysrgb&w=600" />
      //         </div>
      //       </div>
      //       <div className="text">
      //         <div className="card-box">
      //           <button className='plan1'><a href="italy" className='plan1'> ITALY</a></button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
//       {/*==========Footer=================*/}
      // <div className="footer">
      //   <div className="container">
      //     <div className="row1">
      //       <div className="column">
      //         <div className="links">
      //           <h3><a href="about">About us</a></h3>

      //           <p>Welcome to our company!</p>
      //           <p>
      //             We are a team of passionate individuals dedicated to providing high-quality products and excellent customer service. With years of experience in the industry, we strive to deliver innovative solutions that meet the needs of our customers.
      //           </p>
      //           <p>
      //             Our mission is to make a positive impact on people's lives by creating products that enhance their daily routines. We value collaboration, creativity, and continuous improvement. Through our commitment to excellence, we aim to exceed our customers' expectations and build long-lasting relationships.
      //           </p>
      //           <p>
      //             Thank you for choosing our company. We look forward to serving you and meeting your needs. If you have any questions or feedback, please don't hesitate to reach out to us.
      //           </p>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="row2">
      //       <div className="column">
      //         <div className="links">
      //           <h1>Contact us on</h1>
      //           <p>Contact Number&ensp;:📞8778371591</p>
      //           <p>Email Id&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; :📧smarttourism@gmail.com</p>
      //           <p>Office Number&ensp;&ensp;&ensp;:☎️04295224256</p>
      //           <p>Watsapp Number:📱7418834136</p>
      //           <p>Help line number:  112</p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
//     </div>
    
//   )
// }
// export default Home;