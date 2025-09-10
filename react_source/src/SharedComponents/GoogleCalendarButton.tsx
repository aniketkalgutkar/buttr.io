import React, { useEffect, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const GoogleCalendarButton = (props: {text: string, buttonCss?: string}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Prevent duplicate injections
    if (buttonRef.current && buttonRef.current.childElementCount === 0) {
      let button = (window as any).calendar?.schedulingButton

      button?.load({
        url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0ZAyqW_u_NmeAV7U7IjMbo2XGu9LsRAQdzNLZWZfIrZQ7c3hwv8upilov4f060pImRkNg9aEVX?gv=true",
        color: "#E4C441",
        label: "Book an appointment",
        target: buttonRef.current,
      });
    }
  }, []);

  return (
    <>
       <Button variant="primary" onClick={() => setShow(true)} className={props.buttonCss}>
        {props.text}
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={true}
        dialogClassName="lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          {props.text}
        </Modal.Header>
        <Modal.Body>
          <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0ZAyqW_u_NmeAV7U7IjMbo2XGu9LsRAQdzNLZWZfIrZQ7c3hwv8upilov4f060pImRkNg9aEVX?gv=true" className="w-100 h-100"/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GoogleCalendarButton;