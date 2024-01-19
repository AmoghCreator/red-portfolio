import './cards.css';
import {useState, useEffect} from 'react';
import img1 from '../../../media/images/img1.png';
import img2 from '../../../media/images/img2.png';
import img3 from '../../../media/images/img3.png';
import img4 from '../../../media/images/img4.png';

function ProjectCard(props) {
  const [vis, setVis] = useState(false);
  const images = [img1, img2, img3, img4];
  const handleHover = (e) => {
    setVis(!vis);
  }
  return (
	<div>
	  <div className="projectCard" onMouseEnter={handleHover} onMouseLeave={handleHover} style={{backgroundImage : `url(${images[props.value]})`}}>
	    {vis && <div className='hoverDesc'> 
	      <h2 >{props.heading}</h2> 
	      <p>{props.descript}</p>
	    </div>}
	  </div>
	</div>
	);
}

export default ProjectCard;
