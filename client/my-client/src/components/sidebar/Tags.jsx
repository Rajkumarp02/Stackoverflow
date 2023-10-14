import React from 'react'

export default function Tags() {
    const tags = [
      "c",
      "css",
      "express",
      "firebase",
      "html",
      "java",
      "javascript",
      "mern",
      "mongodb",
      "mysql",
      "next.js",
      "node.js",
      "php",
      "python",
      "reactjs",
    ];
    return (
      <div className='right-1'>
      <div className="right">
      <h4>Watched tags</h4>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
    </div>
  )
}
