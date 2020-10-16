import React from 'react';
// import the css module here, but first, don't forget to rename the css file!

function App() {
  return (
    <div className="App">
      <nav>
        {/* use the class list to remove bullet points and align items side-by-side */}
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
      {/* use the class title to change the title color */}
      <h1>CSS Modules!</h1>
      <p>This is an example of CSS Modules!</p>
    </div>
  );
}

export default App;
