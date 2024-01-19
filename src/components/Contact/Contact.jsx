import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Contact(props) {
  return (
	<div className="contact">
	  <h1 ><a style={{textDecoration: "underline", color:"red"}} href="https://drive.google.com/file/d/1p5VFr1v40b_R3ehz-InGU_FA6sGZz4lu/view?usp=sharing" target="blank">View My Resume</a></h1>
	  <h1 style={{color:"white"}}>Message Me</h1>
	  <div className="contactCard">
	    <div className="contactCardInput">
		<input type="email" placeholder="Type in your email" required/>
		<textarea placeholder="Type in your message" />
	    </div>
	    <div className="contactCardSubmit">
	      <FontAwesomeIcon icon={icon({name: 'paper-plane', family: 'classic' , style: 'regular'})} />
	    </div>
	    <h2 style={{color:"white"}}>Email me at : <span style={{color:"red"}}>amoghpreneur@gmail.com</span></h2>
	  </div>
	</div>
	);
}

export default Contact;
