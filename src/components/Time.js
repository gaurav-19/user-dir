import React, { useState, useEffect } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());
  const [countryList, setCountryList] = useState([]);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    fetchCountries();
  },[]);
  
  useEffect(() => {
    let i;
    if(isRunning){
      i = setInterval(() => {
        var updated = new Date(date);
        updated.setSeconds(updated.getSeconds() + 1)
        setDate(updated);
    }, 1000)
    }

    return () => {
      clearInterval(i);
    };

  }, [isRunning, date]);

  //get request for fetching countries
  const fetchCountries = () => {
    fetch('https://worldtimeapi.org/api/timezone')
        .then(response => response.json())
        .then(json => setCountryList(json))
        .catch(e => {console.log(e); alert('Something went wrong. Please reload!')});
  }

  //get request for fetching country's info
  const onCountryChange = (country) => {
    fetch(`https://worldtimeapi.org/api/timezone/${country}`)
    .then(response => response.json())
    .then(json => {
      setIsRunning(true); 
      var countryDate = 
        new Date(json.datetime).toLocaleString('en-US', {
        timeZone: json.timezone,
      });
      setDate(new Date(countryDate))
    })
    .catch(e => {console.log(e); alert('Something went wrong. Please reload!')});

  }

  const format = val => {
    if (val < 10) {
      val = "0" + val;
    }
    return val;
  };

  return (
    <div className="d-flex align-items-center">
      <div className="col">
      <select className="form-select" aria-label="Default select example" onChange={(e) => onCountryChange(e.target.value)}>
        <option selected>Select Country</option>
        {countryList.map(c => (<option key={c.toString()} value={c}>{c}</option>))}
      </select>
      </div>
      <h3 className="m-3">{`${date.getHours()} : ${format(date.getMinutes())} : ${format(date.getSeconds())}`}</h3>
      {isRunning 
      ? 
      <button type="button" className="btn btn-danger border mx-1" onClick={() => setIsRunning(false)}>Pause</button> 
      : 
      <button type="button" className="btn btn-success border mx-1" onClick={() => setIsRunning(true)}>Start</button>}
    </div>
  );
}

export default Time;
