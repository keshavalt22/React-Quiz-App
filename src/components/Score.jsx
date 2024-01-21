import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Score() {
  const [studentAscore, setStudentAscore] = useState(null);
  const [studentBscore, setStudentBscore] = useState(null);
  const [studentCscore, setStudentCscore] = useState(null);


  const getlocalStore = () => {
    setStudentAscore(JSON.parse(localStorage.getItem('studentApoint')))
    setStudentBscore(JSON.parse(localStorage.getItem('studentBpoint')))
    setStudentCscore(JSON.parse(localStorage.getItem('studentCpoint')))
  }

  useEffect(() => {
    getlocalStore();
  }, [])

  return (
    <section className="score">
      <div className="container">
        <h2>Leaderboard</h2>
        <div className="scroreboard">
          <div className=" score-box first">
            <div className="points">
              <h3>Student A</h3>
              <p>{studentAscore}</p>
            </div>
            <div className="points">
              <h3>Student B</h3>
              <p>{studentBscore}</p>
            </div>
            <div className="points">
              <h3>Student C</h3>
              <p>{studentCscore}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Score;