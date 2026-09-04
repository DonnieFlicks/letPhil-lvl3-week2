import { useState } from "react";

/*
Requirements:
- Create an input field for a name
- Display: "Hello, [name]!"
- If input is empty, show: "Please enter your name"
- Limit input to 20 characters
- event listener: onChange
*/

export default function NamePreview() {

  const [name, setName] = useState("")


  return (
    <div>
      <input
        value={name}
        placeholder="Jane Doe"
        maxLength={20}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <p>
        {(!name) ? "Please enter your name above" : "Hello, " + name + "!"}
      </p>
    </div>
  );
}
