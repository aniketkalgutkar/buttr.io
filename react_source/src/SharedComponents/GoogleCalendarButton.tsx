import React, { useEffect, useRef } from "react";

const GoogleCalendarButton: React.FC = () => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // load Google CSS
    const link = document.createElement("link");
    link.href = "https://calendar.google.com/calendar/scheduling-button-script.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // load Google script
    const script = document.createElement("script");
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;

    script.onload = () => {
      if (buttonRef.current && (window as any).calendar?.schedulingButton) {
        (window as any).calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0ZAyqW_u_NmeAV7U7IjMbo2XGu9LsRAQdzNLZWZfIrZQ7c3hwv8upilov4f060pImRkNg9aEVX?gv=true",
          color: "#E4C441",
          label: "Book an appointment",
          target: buttonRef.current,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={buttonRef}></div>;
};

export default GoogleCalendarButton;