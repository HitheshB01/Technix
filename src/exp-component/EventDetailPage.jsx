import React from "react";
import { useParams } from "react-router-dom";

const EventDetailPage = ({ eventComponents }) => {
  const { eventId } = useParams(); // Get event ID from URL
  const EventComponent = eventComponents[eventId]; // Get corresponding component

  return (
    <div>
      {EventComponent ? <EventComponent /> : <p className="text-center text-white">Event not found!</p>}
    </div>
  );
};

export default EventDetailPage;
