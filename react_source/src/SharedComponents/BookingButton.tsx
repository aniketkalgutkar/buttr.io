import React, { useState, useEffect } from 'react';

const BookingButton = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // Your unique Google Calendar scheduling URL
  const calendarUrl = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0ZAyqW_u_NmeAV7U7IjMbo2XGu9LsRAQdzNLZWZfIrZQ7c3hwv8upilov4f060pImRkNg9aEVX?gv=true';

  useEffect(() => {
    // This effect hook correctly loads and cleans up the Google scripts
    if (document.querySelector('script[src="https://calendar.google.com/calendar/scheduling-button-script.js"]')) {
      setIsScriptLoaded(true);
      return;
    }

    const link = document.createElement('link');
    link.href = "https://calendar.google.com/calendar/scheduling-button-script.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;

    script.onload = () => {
      setIsScriptLoaded(true);
    };
    
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []); // Empty dependency array ensures this runs only once.

  const handleBookingClick = () => {
    if (isScriptLoaded && (window as any).calendar) {
      (window as any).calendar.schedulingButton.load({
        url: calendarUrl,
        // FINAL FIX: Add these properties back in.
        // The script requires them for the modal to work correctly.
        color: "#007bff",
        label: "Book appointment",
      });
    } else {
      console.error('Google Calendar script not loaded or available yet.');
    }
  };

  return (
    <button
      onClick={handleBookingClick}
      disabled={!isScriptLoaded}
      style={{
        backgroundColor: '#007bff',
        color: 'white',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        opacity: isScriptLoaded ? 1 : 0.5,
      }}
    >
      {isScriptLoaded ? '🗓️ Book a Meeting' : 'Loading Calendar...'}
    </button>
  );
};

export default BookingButton;