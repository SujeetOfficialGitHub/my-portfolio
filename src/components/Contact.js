import React from 'react'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("This form is for display purposes only.")
  }
  return (
    <section className='contact' id='contact'>
      <div className='heading1'>
        <h1>Contact Us</h1>
      </div>

      <form method='POST'>
        <div className="input-box">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder='Enter name'/>
        </div>
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder='Enter email'/>
        </div>
        <div className="input-box">
          <label htmlFor="phone">Phone No.</label>
          <input type="text" name="phone" id="phone" placeholder='Enter phone'/>
        </div>
        <div className="input-box">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="" cols="30" rows="10" placeholder='Write message here...'></textarea>
        </div>
        <div className='btn-box formBtn'>
          <button type='submit' onClick={handleSubmit} className='btn'>Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default Contact