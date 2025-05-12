import React, { useState } from 'react';
import '../App.css';
import Category from './Category.jsx';
import Hero from './Hero-Section.jsx';

import Prastavit from './Prastavit.jsx';
import Object from './Object.jsx';
import MajaGav from './MajaGav.jsx';
import Pratisad from './Pratisad.jsx';
import Purva from './Purva.jsx';
import Que from './Answer.jsx';
import ContactPop from './PageComponents/ContactUs/KaviSamelanContactPop.jsx';
import SuccessPopup from './PageComponents/ContactUs/SuccesPopUp.jsx';

// import BookFlip from './Book.jsx';


const Home= () => {

<<<<<<< HEAD
  const [activePopupId, setActivePopupId] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleOpenPopup = (eventId) => {
    setActivePopupId(eventId);
  };

  const handleClosePopup = () => {
    setActivePopupId(null);
  };

=======
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  
  const handleOpenPopup = (event) => {
    setSelectedEvent(event);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
  };


>>>>>>> f93e4c776c49ec0f98df5da5df7b00c87e373878
  return (
  

    <React.Fragment>
  
    <Hero/>
    <Prastavit onOpenPopup={handleOpenPopup} />
<<<<<<< HEAD
=======
    {showPopup && (
  <ContactPop
    onClose={() => setShowPopup(false)}
    setShowSuccessPopup={setShowSuccessPopup}
    selectedEvent={selectedEvent}
  />
)}

>>>>>>> f93e4c776c49ec0f98df5da5df7b00c87e373878
    <Category/>
    <Object/>
    <MajaGav/>
    <Pratisad/>
    <Purva/>
   <Que/>
  
<<<<<<< HEAD
    {/* Conditionally render the popup */}
    {activePopupId === 1 && (
  <ContactPop
    onClose={handleClosePopup}
    setShowSuccessPopup={setShowSuccessPopup}
  />
)}
=======
>>>>>>> f93e4c776c49ec0f98df5da5df7b00c87e373878

      {/* You can add more conditionals for other modals */}
      {showSuccessPopup && <SuccessPopup onClose={() => setShowSuccessPopup(false)} />}

   </React.Fragment>
  );
}

export default Home;
