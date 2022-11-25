import { nanoid } from "nanoid";
export default function Quiz(props) {
  const options = props.options.map((opt) => {
    return (
      <p key={nanoid()} className="option">
        {opt}
      </p>
    );
  });
  return (
    <div className="question">
      <h2 className="heading-secondary">{props.question}</h2>
      <div className="options">{options}</div>
    </div>
  );
}
