import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Questions() {
  const [questions, setQuestions] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [studentApont, setStudentApoint] = useState([]);
  const [studentBpont, setStudentBpoint] = useState([]);
  const [studentCpont, setStudentCpoint] = useState([]);
  const { qesNo, id, diffValue, studentId } = useParams();

  const fetchQuestions = () => {
    axios.get(`https://opentdb.com/api.php?amount=${qesNo}&category=${id}&difficulty=${diffValue}`)
      .then((res) => {
        const data = res.data.results.map(question => {
          return {
            ...question,
            allOptions: question.incorrect_answers.concat(question.correct_answer).sort((a, b) => Math.random() - 0.5)
          }
        })
        setQuestions(data);
      })
      .catch((error) => console.log(error));
  }

  const handleNext = () => {
    setActiveIndex(activeIndex + 1)
  }

  const handleBack = () => {
    if (activeIndex > 0) {
      return setActiveIndex(activeIndex - 1)
    }
  }

  const handleAnswer = (elm) => {
    let correctAns = questions.map((elm) => {
      return elm.correct_answer
    })
    if (correctAns[activeIndex] == elm.target.value) {
      setCorrectAnswer(correctAnswer + 1)
    }
  }

  const setlocalStore = () => {
    if (studentId == 1) {
      localStorage.setItem('studentApoint', JSON.stringify(correctAnswer))
    } else if (studentId == 2) {
      localStorage.setItem('studentBpoint', JSON.stringify(correctAnswer))
    } else if (studentId == 3) {
      localStorage.setItem('studentCpoint', JSON.stringify(correctAnswer))
    }
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    setlocalStore();
  }, [correctAnswer])

  if (!questions) {
    return (
      <section className="questions">
        <div className="catbox">
          <h2>Loading...</h2>
        </div>
      </section>
    )
  }

  const allOptions = questions.map((elm) => {
    return elm.allOptions;
  })

  return (
    <section className="questions">
      <div className="point-box">
        <h4>{`Score: ${correctAnswer}/${activeIndex + 1}`}</h4>
      </div>
      <div className="catbox">
        <h2>Qestions</h2>
        <p> <strong>{activeIndex + 1}. </strong> {questions[activeIndex].question}</p>
        {
          allOptions[activeIndex].map((elm) => {
            return (
              <button onClick={handleAnswer} value={elm} key={elm} className="submit-ans">{elm}</button>
            )
          })
        }
      </div>
      <div className="btn-box">
        <button onClick={handleBack} className="submit-btn">Back</button>
        {
          (activeIndex < qesNo - 1) ?
            <button onClick={handleNext} className="submit-btn">Next</button> :
            <Link to={`/result/${correctAnswer}/${qesNo}/${studentId}`}>
              <button className="submit-btn">Show Result</button>
            </Link>
        }
      </div>
    </section>
  )
}

export default Questions;
