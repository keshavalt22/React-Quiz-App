import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <h2>Quiz Quest</h2>
      <p>Your Journey to Knowledge Begins Here</p>
      <p className="dull">Elevate your learning journey with quizzes - where knowledge meets curiosity.</p>
      <div className="quizbtn">
        <Link to={`/categories/${1}`}><button className="btn">Sudent A</button></Link>
        <Link to={`/categories/${2}`}><button className="btn">Sudent B</button></Link>
        <Link to={`/categories/${3}`}><button className="btn">Sudent C</button></Link>
      </div>
    </section>
  )
}

export default Hero;