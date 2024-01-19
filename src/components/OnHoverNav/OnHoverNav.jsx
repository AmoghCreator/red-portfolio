import './onHoverNav.css';

function OnHoverNav(props) {
    return (
	<h3 id="hoverDescNav" style={{color:"red"}}>{props.name}</h3>
    );
}

export default OnHoverNav;
