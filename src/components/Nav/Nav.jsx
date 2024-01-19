import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import './Nav.css'
import {configureStore} from '@reduxjs/toolkit'
import {useState} from 'react'
import OnHoverNav from '../OnHoverNav/OnHoverNav'
import {setPage} from '../../slice/pageSlice'
import {useDispatch, useSelector} from 'react-redux'

function Nav () {
    const [hover, setHover] = useState("");
    const dispatch = useDispatch();
    const selectedPage = useSelector(state => state.page.value);
    function hoverEnable(e) {
	    setHover(e.target.id);
	    console.log(selectedPage);
    }
    function hoverDisable(e) {
	setHover("");
    }
    function handleClick(e) {
      let data = e.target.parentElement.id;
      if(data != "") dispatch(setPage(data));
      console.log(selectedPage);
    }
    
  return (
      <>
      {/* <div class="wrapper" onMouseEnter={hoverEnable} >  wrapper div has no effect over FontAwesomeIcon 
	  the DOM still recieves only svg path div*/}
				{/* creating a wrapper div beacause value of e.target on mouseEnter in
				// FontAwesomeIcon returns svg element for some reason */}
	    {hover === "Home" && <OnHoverNav name="Home"/>}
	    {hover === "Projects" && <OnHoverNav name="Projects"/>}
	    {hover === "Contact" && <OnHoverNav name="Contact"/>}
	<nav class="navWeb" >
	    <FontAwesomeIcon icon={icon({name: 'address-card', family: 'classic' , style: 'solid'})}  
	    className="navIcons" id="Home" onClick={handleClick} onMouseEnter={hoverEnable} onMouseLeave={hoverDisable} /> 
      {/*</div>*/}
	   <FontAwesomeIcon icon={icon({name: 'newspaper', family: 'classic', style: 'solid'})} 
	    className="navIcons" id="Projects" onClick={handleClick} onMouseEnter={hoverEnable} onMouseLeave={hoverDisable}/>
	   <FontAwesomeIcon icon={icon({name: 'envelope', family: 'classic' , style: 'solid'})} 
	    className="navIcons" id="Contact" onClick={handleClick} onMouseEnter={hoverEnable} onMouseLeave={hoverDisable}/>
	</nav>
       </>
  )
}

export default Nav;
