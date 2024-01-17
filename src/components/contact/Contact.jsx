import React ,{ useState } from 'react'
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone , faEnvelope , faLocationDot } from '@fortawesome/free-solid-svg-icons'
import facebook from "../../img/facebook.svg";
import instagram from "../../img/instagram.svg";
import twitter from "../../img/twitter.svg"

function Contact() {

    const phone = <FontAwesomeIcon icon={faPhone} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    const location = <FontAwesomeIcon icon={faLocationDot} />
    
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Form gönderildiğinde yapılacak işlemleri burada gerçekleştirin
      console.log('Form gönderildi:', formData);
    };

  return (
    <div className='contact'>
        <div className="c-icons">
            <i className='c-icon fa-2x'>{phone} <span>+90 555 444 55 55</span></i>
            <i className='c-icon fa-2x'>{email} <span>azadelpeze@gmail.com</span></i>
            <i className='c-icon fa-2x'>{location} <span>osmanağa mah.şemsitap sok. no:16 Kadıköy/İstanbul</span></i>
            <i className='c-icon'><img src={facebook} alt="" /> <span>azadelpeze/facebook</span></i>
            <i className='c-icon'><img src={instagram} alt="" /> <span>azadelpeze/instagram</span></i>
            <i className='c-icon'><img src={twitter} alt="" /><span>azadelpeze/twitter</span></i>
        </div>
        <div className="line"></div>
        <div className='c-form'>
          <h2>Bize Ulaşın</h2>
          <form onSubmit={handleSubmit}>
            <label>
                İsim:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Soyisim:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                E-posta:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Mesaj:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <button type="submit">Gönder</button>
            </form>
        </div>
    </div>

  )
}

export default Contact
