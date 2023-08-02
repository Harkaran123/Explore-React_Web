import React from 'react'

function Contact() {
  return (
    <div className='contact'>

      <div className="contact-row">
        <h2>Fill the Details and We Will Contact You.</h2>
        <form >
          <input type="text" placeholder='Enter Your Name' />
          <input type="text" placeholder='Enter Your Phone Number' />
          <textarea name="" id="" cols="30" rows="7" placeholder='Any Query'></textarea>
        </form>
        <a className="btn-all" href="">Send Message</a>
      </div>

    </div>
  )
}

export default Contact
