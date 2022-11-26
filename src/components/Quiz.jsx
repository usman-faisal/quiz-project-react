import { nanoid } from "nanoid";
export default function Quiz(props) {
  const options = props.options.map((opt, index) => {
    const styles = {
      backgroundColor: props.optionSelected[index].isSelected
        ? "#d6dbf5"
        : "none",
    };
    return (
      <p
        key={nanoid()}
        style={styles}
        onClick={props.onClick}
        className="option"
        id={props.optionsID[index].id}
      >
        {opt}
      </p>
    );
  });
  return (
    <div id={props.questionID} className="question">
      <h2 className="heading-secondary">{props.question}</h2>
      <div className="options">{options}</div>
    </div>
  );
}
