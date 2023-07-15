import React from 'react'
import '../styles/Contact.css'
function Contact() {
  return (
    <div className='contactContainer' id='contact'>
      <h1>contact us</h1>
      <div className='infoContainer'>
        <div className='info1'>
          <h2>Contact Information</h2>
          <ul>
            <li>Gym Name: GODZILLA</li>
            <li>Address: 123 Main Street, bla bla town,<br/> BLA BLA Country</li>
            <li>Phone: (555) 123-4567</li>
            <li>Email: info@godzilla.com</li>
          </ul>
        </div>
        <div className='info2'>
          <h2>Hours of Operation</h2>
          <ul>
            <li>Monday to Friday: 6:00 am - 10:00 pm</li>
            <li>Saturday: 8:00 am - 8:00 pm</li>
            <li>Sunday: 10:00 am - 6:00 pm</li>
          </ul>
        </div>
      </div>
      <div className='faq'>
          <h2>Frequently Asked Questions (FAQ)</h2>
           <ul>
              <li>Q: What are your membership options and pricing?
                  A: We offer various membership plans tailored to different needs and budgets.<br/> Please visit our Membership page for detailed information.</li>
              <li>Q: Do you offer personal training sessions?
                  A: Yes,We have certified personal trainer available for one-on-one or small group sessions.<br/>Contact our Personal Training deparment for more information.
              </li>
              <li>Q: Can I try a class before becoming a member?
                  A: Absolutely!We offer a free trial class for first-time visitors.</li>
           </ul>
           <h4>Contact us today to learn more about membership options, book a tour, or ask any questions you may have. We can't wait to welcome <br/>you to the GODZILLA family and be a part of your incredible fitness transformation!</h4>
        </div>
    </div>
  )
}

export default Contact
