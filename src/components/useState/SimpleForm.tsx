import { useState } from "react";

/*
Requirements:
- Create inputs for:
  - Name
  - Email
- Store values using state (controlled inputs)
- On submit:
  - Prevent page reload
  - Display submitted values or conditional success message
- Clear form after submission
*/

export default function ContactForm() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <section>
        <input
          value={name}
          placeholder="Enter name"
          maxLength={20}
          onChange={(n) => setName(n.target.value)}
        />
        <input
          value={email}
          placeholder="Enter email"
          maxLength={40}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </section>
      <section>
        <p>{name ? "Info submitted! Name: " + name : ""}</p>
        <p>{email ? "Info submitted! Email: " + email : ""}</p>
      </section>
    </form>
  );
}
