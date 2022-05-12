import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"
import { BLOGDATA } from "../data/blog";


console.log(blogData);

function App() {

  return (
    <div className="App">
      <Header 
        name={blogData.name} 
      />
      <About 
        blogData={blogData}
        about={blogData.about}
        blogImage={blogData.image}
      />
      <ArticleList 
        posts={blogData.posts}
      />
    </div>
  );
}

export default App;
