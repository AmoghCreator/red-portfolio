import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import './Socials.css'

function Socials () {
  return (
	<nav class="navSoc" >
	  <a href='https://github.com/AmoghCreator' target="blank"><FontAwesomeIcon icon={icon({name: 'github', style: 'brands'})} class="navIcons"/></a>
	  <a href="https://www.linkedin.com/in/amoghdevelops/" target="blank"><FontAwesomeIcon icon={icon({name: 'linkedin', style: 'brands'})} class="navIcons"/></a>
	  <a href='twitter.com/jeSuisAmogh' target="blank"><FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} class="navIcons"/></a>
	</nav>
  )
}

export default Socials;
