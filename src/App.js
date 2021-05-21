import React, { useState, useEffect } from 'react';
import "./App.css";
// import Counter from "./components/Counter/Counter";
import Blog from "./components/Blog/Blog";

const initialState = {
  title: undefined,
  body: undefined
}

function App() {
  const [content, setContent] = useState(initialState);
  const [blogId, setBlogId] = useState(1);

  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/posts/${blogId}`;
    
    fetch(URL)
      .then(res => res.json())
      .then(blogData => {
        const newContent = {
          title: blogData.title,
          body: blogData.body
        }
        setContent(newContent);
      })
  }, [blogId, setContent])

  const handleSubmit = e => {
    e.preventDefault();
    const userInput = e.target["blog-id"].value;
    setBlogId(userInput);
  }
  
  return (
    <div className="App">
      {/* <Counter /> */}
      <Blog content={content} onFormSubmit={handleSubmit} />
    </div>
  );
}

export default App;
