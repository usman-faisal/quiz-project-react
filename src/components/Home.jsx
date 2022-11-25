import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1 className="home__heading">Quizzical</h1>
      <p className="home__desc">Test your knowledge</p>

      <Link to="/quiz">
        <button className="home__btn">Start quiz</button>
      </Link>
    </div>
  );
}
