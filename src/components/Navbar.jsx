import React from "react";

function Navbar({ setDifficulty, setQuestions, setCategory }) {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark p-2">
        <a className="navbar-brand" href="#">
          Questions
        </a>
        <select
          className="form-control-sm ms-auto me-2"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select
          className="form-control-sm me-2"
          onChange={(e) => setQuestions(e.target.value)}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <select
          className="form-control-sm"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="linux">Linux</option>
          <option value="bash">Bash</option>
          <option value="docker">Docker</option>
          <option value="sql">SQL</option>
          <option value="cms">CMS</option>
          <option value="code">Code</option>
          <option value="devops">DevOps</option>
        </select>
      </nav>
    </>
  );
}

export default Navbar;
