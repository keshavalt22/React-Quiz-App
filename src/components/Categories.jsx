import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/context";
import { Link, useParams } from "react-router-dom";


function Categories() {
  const difficulties = ["easy", "medium", "hard"];
  const noOfquestion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const categoriesName = [];
  const { studentId } = useParams();

  const [diffValue, setDiffValue] = useState("easy");
  const [qesNo, setQesNo] = useState(1);
  const [id, setId] = useState(9);

  const data = useContext(DataContext);

  const { fetchCategories, categories } = data;

  categories.map((elm) => categoriesName.push(elm.name))

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case "difficulties":
        setDiffValue(value);
        break;
      case "noOfQestion":
        setQesNo(Number(value));
        break;
      case "categories":
        setId(Number(value));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="categories">
      <div className="catbox">
        <h2>Select Options</h2>
        <form className="categories-form">
          <label htmlFor="categories">Select Category</label>
          <select
            onChange={handleChange}
            name="categories"
          >{
              categories.map((elm) => {
                return <option key={elm.id} value={elm.id}>{elm.name}</option>
              })
            }</select>
          <label htmlFor="difficulties">Select Difficulties</label>
          <select
            onChange={handleChange}
            name="difficulties"
          >{
              difficulties.map((elm) => {
                return <option key={elm} value={elm}>{elm}</option>
              })
            }</select>
          <label htmlFor="noOfquestion">Number Of Questions</label>
          <select
            onChange={handleChange}
            name="noOfQestion"
          >{
              noOfquestion.map((elm) => {
                return <option key={elm} value={elm}>{elm}</option>
              })
            }</select>
          <Link to={`/quiz/${qesNo}/${id}/${diffValue}/${studentId}`}>
            <input
              type="submit"
              value="submit"
              className="submit-btn"
            />
          </Link>
        </form>
      </div>
    </section>
  )
}


export default Categories;