//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeT, setHomeT] = useState('Lions');
  const [hScore, setHScore] = useState(0);
  const [awayT, setAwayT] = useState('Tigers');
  const [aScore, setAScore] = useState(0);
  
  const changeTeam = 
    (e)=>{
    const teamName = window.prompt('New Team Name?');
    console.log(e.target);
    console.log(document.querySelector('h2.home_name'))
    let newTeam = e.target === e.target && (e.target.textContent = teamName);
    return newTeam;
  }
  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name" onClick={(e)=>changeTeam(e)}>{homeT}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score" >{hScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name" onClick={(e)=>changeTeam(e)}>{awayT}</h2>
            <div className="away__score">{aScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={()=>{setHScore(hScore + 7)}}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={()=>{setHScore(hScore + 3)}}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={()=>{setAScore(aScore + 7)}}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={()=>{setAScore(aScore + 3)}}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
