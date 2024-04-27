'use client'
import React, { useEffect } from 'react';

const GoogleCalendarButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // El componente no renderiza nada, ya que el botón se agregará dinámicamente por el script.
};

export default GoogleCalendarButton;


// <!-- Google Calendar Appointment Scheduling begin -->
// <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet">
// <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
// <script>
// (function() {
//   var target = document.currentScript;
//   window.addEventListener('load', function() {
//     calendar.schedulingButton.load({
//       url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ351Hn_54D1Ybx9ySuaiLAo1mHdIemiV2J-6kNZz4wrbWaoLQP4ca3EC_wsuk7WcBfYwjoMVK3A?gv=true',
//       color: '#039BE5',
//       label: 'Programar una cita',
//       target,
//     });
//   });
// })();
// </script>
// <!-- end Google Calendar Appointment Scheduling --></link>