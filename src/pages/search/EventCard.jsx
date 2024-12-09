import React from 'react';

const EventCard = ({ event }) => {
  const { title, description, eventDate, coverImage, organizer, attendees } = event;

  return (
    <div className="bg-[#ffffff1c] text-white flex overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      {coverImage && (
        <img src={coverImage} alt={title} className="w-[50%] h-56 object-contain" />
      )}

      <div className="p-4 flex flex-col justify-center">
        <div className="flex items-center text-white space-x-2 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 19V6l15 7-15 7z" />
          </svg>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>

        {/* Event Description */}
        <p className="text-sm mb-3">{description}</p>

        {/* Event Date */}
        <p className="text-sm ">
          <strong>Date:</strong> {new Date(eventDate).toLocaleDateString()}
        </p>

        {/* Event Organizer */}
        {organizer && (
          <div className="flex items-center space-x-2 ">
            <p className="text-sm ">
              <strong>Organizer:</strong> {organizer}
            </p>
          </div>
        )}

        {/* Attendees Count */}
        <div className="mt-2">
          <span className="text-sm text-primary">{attendees?.length} Attendees</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
