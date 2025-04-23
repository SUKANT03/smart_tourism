import './About.css';
import { useLocation, useNavigation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

function About() {
  const [isCollapsed1, setIsCollapsed1] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isTagVisible, setIsTagVisible] = useState(false);
  const tagRef = useRef(null);


  const toggleCollapse1 = () => {
    setIsCollapsed1(!isCollapsed1);
  };
  const toggleCollapse2 = () => {
    setIsCollapsed2(!isCollapsed2);
  };
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
      <div className="fixed-background1">
        <div className="scroll-wrapper1">
          <h1>About Us</h1>
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
          <h1>Contact us on</h1>
          <p>Contact Number&ensp;:📞8778371591</p>
          <p>Email Id&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; :📧smarttourism@gmail.com</p>
          <p>Office Number&ensp;&ensp;&ensp;:☎️04295224256</p>
          <p>Watsapp Number:📱7418834136</p>
          <div>
            <button className='cb' onClick={toggleCollapse1}>
              {isCollapsed1 ? '+  TERMS AND CONDITIONS' : '-  TERMS AND CONDITIONS'}
            </button>
            {!isCollapsed1 && (
              <div>
                <h1>Terms and Conditions</h1>
                <p>Please read these terms and conditions carefully before using our smart tourism website. By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you should not use our website.</p>

                <h2>1. Use of the Website</h2>
                <p>1.1 You must be at least 18 years old to use this website or have the consent of a legal guardian.</p>
                <p>1.2 You agree to use our website in accordance with applicable laws and regulations. You will not use the website for any illegal or unauthorized purpose.</p>

                <h2>2. Intellectual Property</h2>
                <p>2.1 All intellectual property rights, including copyrights, trademarks, logos, and content, displayed on the website are the property of our company or our licensors. You are prohibited from using, copying, reproducing, or distributing any of the intellectual property without our prior written consent.</p>

                <h2>3. Privacy and Data Collection</h2>
                <p>3.1 We respect your privacy and handle your personal information in accordance with our Privacy Policy. By using our website, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy.</p>
                <p>3.2 You are responsible for the accuracy and completeness of the information you provide on our website. We are not liable for any consequences arising from inaccurate or incomplete information provided by you.</p>

                <h2>4. Booking and Payments</h2>
                <p>4.1 Our website may allow you to book various tourism services, including accommodations, transportation, tours, and activities. Booking terms and conditions specific to each service will apply.</p>
                <p>4.2 You agree to provide accurate and up-to-date payment information for any bookings made through our website. We are not responsible for any errors or issues related to payment processing.</p>
                <p>4.3 Cancellation, refund, and modification policies may vary depending on the specific service provider. It is your responsibility to review and understand the terms and conditions of each booking before making a reservation.</p>

                <h2>5. Disclaimer of Liability</h2>
                <p>5.1 Our website serves as a platform to connect users with tourism service providers. We do not guarantee the accuracy, reliability, or availability of the services provided by third-party service providers.</p>
                <p>5.2 We are not liable for any damages, losses, or injuries incurred as a result of your use of the services or the information provided on our website. You assume all risks associated with your interactions and transactions with third-party service providers.</p>

                <h2>6. Modification and Termination</h2>
                <p>6.1 We reserve the right to modify, suspend, or terminate any part of our website, including these terms and conditions, at any time without prior notice.</p>
                <p>6.2 We may also suspend or terminate your access to the website if we suspect any violation of these terms and conditions or any unlawful activity.</p>

                <h2>7. Governing Law and Jurisdiction</h2>
                <p>7.1 These terms and conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].</p>

              </div>
            )}
          </div>
          <div>
            <button className='cb' onClick={toggleCollapse2}>
              {isCollapsed2 ? '+  FREQUENTLY ASKED QUESTIONS' : '-  FREQUENTLY ASKED QUESTIONS'}
            </button>
            {!isCollapsed2 && (
              <div>
                <h1>Frequently Asked Questions (FAQs) for Smart Tourism Website</h1>

                <h2>What is a smart tourism website?</h2>
                <p>A smart tourism website is a digital platform that leverages technology to enhance the travel experience. It provides users with interactive features, personalized recommendations, real-time information, and seamless booking options.</p>

                <h2>How can I use the smart tourism website?</h2>
                <p>Using the smart tourism website is easy. Simply visit the website and explore the various features and options available. You can search for destinations, browse attractions, book accommodations and activities, get personalized recommendations, and access real-time information during your trip.</p>

                <h2>How do I search for destinations on the smart tourism website?</h2>
                <p>The smart tourism website usually has a search bar or a dedicated search page where you can enter keywords, such as the name of a city or a specific attraction, to find relevant destinations. You can also filter your search based on location, popularity, or specific interests.</p>

                <h2>Can the smart tourism website help me plan my itinerary?</h2>
                <p>Yes, the smart tourism website often offers itinerary planning features. You can select destinations, attractions, and activities based on your preferences, and the website will help you organize them into a comprehensive itinerary. It may also provide suggestions and optimize routes for efficient travel.</p>

                <h2>How can the smart tourism website provide personalized recommendations?</h2>
                <p>The smart tourism website collects information about your preferences, such as your travel history, interests, and reviews, to offer personalized recommendations. It analyzes this data to suggest destinations, attractions, accommodations, and activities that align with your preferences and past experiences.</p>

                <h2>Are the prices on the smart tourism website accurate?</h2>
                <p>The prices on the smart tourism website are usually provided directly by the service providers, such as hotels, airlines, and tour operators. While the website strives to keep the information accurate and up-to-date, prices may vary or change due to various factors. It's always recommended to double-check the prices before making a booking.</p>

                <h2>How can I book accommodations and activities through the smart tourism website?</h2>
                <p>The smart tourism website typically integrates with booking systems and allows you to make reservations directly through the platform. You can select your desired accommodations or activities, choose the dates, and complete the booking process by providing the necessary details and payment information.</p>

                <h2>Can I access real-time information, such as weather updates and local events, through the smart tourism website?</h2>
                <p>Yes, the smart tourism website often provides real-time information to enhance your travel experience. You can access weather updates, local events, transportation schedules, and other relevant details to stay informed during your trip. Some websites may also offer mobile apps for on-the-go access.</p>

                <h2>Is my personal information secure on the smart tourism website?</h2>
                <p>Smart tourism websites prioritize the security and privacy of users' personal information. They employ encryption, secure payment gateways, and other measures to protect your data. However, it's always advisable to review the website's privacy policy and take necessary precautions, such as using strong passwords and avoiding public Wi-Fi for sensitive transactions.</p>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};
export default About;
