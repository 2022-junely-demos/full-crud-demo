/* eslint-disable no-console */
import { useState } from 'react';

export default function PostForm({ title = '', description = '', submitHandler }) {
  const [titleInput, setTitileInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);
  console.log('title prop: ', title);
  console.log('description prop: ', description);

  const myFunction = () => {
    console.log('running my function!');
  };
  myFunction();
  return (
    <div>
      <label>Title</label>
      <input type="text" value={titleInput} onChange={(e) => setTitileInput(e.target.value)} />
      <label>Description</label>
      <input
        type="text"
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
      />
      <button
        onClick={() => {
          submitHandler(titleInput, descriptionInput);
        }}
      >
        Submit
      </button>
    </div>
  );
}
