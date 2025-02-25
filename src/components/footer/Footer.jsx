import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container flexSB'>
          <div className='legal'>
            <p>
              2020 © Adminto theme by <span>IDRISS BOUKDIR</span>
            </p>
          </div>
          <div className='links flexSB'>
            <li>About Us</li>
            <li>Help</li>
            <li>Contact Us</li>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
