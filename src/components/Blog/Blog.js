import React from 'react'
import "./Blog.css"

export default function Blog({ content, onFormSubmit }) {
  const { title, body } = content;
  return (
    <div className="blog-container">
      <form onSubmit={onFormSubmit} className="blog-form">
        <input id="blog-id" type="text" placeholder="enter a blog id"></input>
        <button type="submit">Submit</button>
      </form>
      <h2 className="blog-heading">{title}</h2>
      <p className="blog-body">{body}</p>
    </div>
  )
}
