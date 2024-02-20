import './Intro.css';

function Intro(props) {
  return (
    <div className="intro">
      {[...Array(7)].map((_, i) => (
        (i <= 3) ? <h1 style={{ opacity: 0.25 + i * .25 }}> Hi, I am Amogh </h1>
          // ^ starting from 0.25 opacity, increase by 0.25 each time 
          : <h1 style={{ opacity: 0.75 - (i - 4) * .25 }}> Hi, I am Amogh </h1>
        // starting from 0.75 opacity, decrease by 0.25 each time ,
        // i-4 because we want the 4 the element to be 0.75, and 
        // decrease in opacity subsequently
      ))}
    </div>
  );
}

export default Intro;
