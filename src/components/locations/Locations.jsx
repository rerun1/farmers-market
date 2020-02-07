import React from "react";
import Day from "./Day";

var marketSchedule = [
 {
    dayofweek: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
 },
 {
    dayofweek: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
 },
 {
    dayofweek: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
 },
 {
    dayofweek: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
 },
 {
    dayofweek: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
 },
 {
    dayofweek: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
 }
];

function Locations(){
  return(
      <div className="box">
        <h1>Daily Location</h1>
        {marketSchedule.map((day,index)=>
          <Day
            dayofweek={day.dayofweek}
            location={day.location}
            booth={day.booth}
            hours={day.hours}
            key={index}
          />
        )}
      </div>
    );
}

export default Locations;
