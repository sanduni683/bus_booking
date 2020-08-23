import React from 'react';
import logo from './images/Koombiyo_logo_small.jpg'
import book_now from './images/book_now.png'
import './App.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'


function App() {

  return (
    <div className="mainContainer">
      <div className="header">
        <div className="logo">
          <img src={logo} className="koombiyo-logo" alt="koombiyo-logo" />
        </div>
        <div className="navBar">
          <a className="active" href="default.asp">Home</a>
          <a href="news.asp">News</a>
          <a href="contact.asp">Contact</a>
          <a href="about.asp">About</a>
        </div>
      </div>

      <div>
        {/* div at the bottom layer (for blur Background there should be a another layer) */}
        <div className="blur_background" />
        <div className="first_middle_content">
          <div>
            <Calendar
              value={new Date()}
            />
          </div>

          <div className="booking_form">

            <div className="pulse">
              <img src={book_now} className="book_now_pulse" alt="book_now" width="100" height="100" />
            </div>

            <p>Fill in your journey details, We will be in touch with you:</p>

            <form>

              <label for="type">Type</label>
              <select id="type" name="type">
                <option value="tripBased">Trip based</option>
                <option value="timeBased">Time based</option>
                <option value="termBased">Term based</option>
              </select>

              <div className="form_input_startLastDate">
                <div className="form_input_small">
                  <label for="dateNeeded">Start Date</label>
                  <input type="date" id="dateNeeded" name="dateNeeded" defaultValue="dd/mm/yy" />
                </div>
                <div className="form_input_small">
                  <label for="timeNeeded">Last date</label>
                  <input type="time" id="timeNeeded" name="timeNeeded" defaultValue="5.00 AM" />
                </div>
              </div>

              <div className="form_input_passengersTime">
                <div className="form_input_small">
                  <label for="passengers">Number of passengers</label>
                  <input type="text" id="passengers" name="passengers" defaultValue="How many passengers do you have?" />
                </div>
                <div className="form_input_small">
                  <label for="passengers">Time needed</label>
                  <input type="text" id="passengers" name="passengers" defaultValue="How many passengers do you have?" />
                </div>
              </div>

              <div className="form_input_main">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" defaultValue="Tell us your name." />
              </div>
              <div className="form_input_main">
                <label for="contactNo">ContactNo</label>
                <input type="text" id="contactNo" name="contactNo" defaultValue="If you have more information for us, please make a note here." />
              </div>
              <div className="form_input_main">
                <label for="moreInfo">More information</label>
                <input type="text" id="moreInfo" name="moreInfo" defaultValue="If you have more information for us, please make a note here." />
              </div>

              <div className="form_input_submit">
                <input type="submit" value="Submit" />
              </div>
            </form>

          </div>
        </div>
      </div>
      <div className="second_middle_content">
        <p>iiiiiiiiiiiiiiiiiii</p>
      </div>
      <div className="footer"></div>
    </div>

  );
}

export default App;