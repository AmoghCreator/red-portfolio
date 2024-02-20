import './onHoverNav.css';

function OnHoverNav(props) {
  return (
    <div className="hoverDescContainer">
      <h3 id="hoverDescNav" style={{ color: "red" }}>{props.name}</h3>
    </div>
  );
}

export default OnHoverNav;
