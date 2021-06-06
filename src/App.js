import { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing"
};
// const [meaning, setMeaning] = useState("");
const emojis = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function inputHandler(event) {
    let userInput = event.target.value;
    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("the meaning is not available in the database");
    }
    // console.log(emojiDictionary[userInput]);
    // if (emojiDictionary[userInput] === undefined) {
    //   setMeaning("the meaning is not available in the database");
    // } else {
    //   setMeaning(emojiDictionary[userInput]);
    // }
  }
  function clickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1>emojiii interpreter</h1>
      <input placeholder="Enter an emoji" onChange={inputHandler}></input>
      <h2>{meaning}</h2>
      <div>
        {emojis.map((emoji) => (
          <span
            key={emoji}
            style={{ padding: "2rem", fontSize: "x-large" }}
            onClick={() => clickHandler(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
