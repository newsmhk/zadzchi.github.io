body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: white;
    color: #333;
  }
  
  header {
    background-color: #0057b7;
    color: white;
    padding: 1rem;
    text-align: center;
  }
  
  nav {
    display: flex;
    justify-content: center;
    background-color: #e6e6e6;
  }
  
  nav button {
    padding: 1rem;
    margin: 0.5rem;
    border: none;
    background-color: #0057b7;
    color: white;
    cursor: pointer;
  }
  
  .section {
    display: none;
    padding: 1rem;
  }
  
  .section.active {
    display: block;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
  }
  
  .task {
    background: #f0f8ff;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid #0057b7;
  }
  
  .goal {
    margin: 0.5rem 0;
    padding: 0.5rem;
    border-left: 5px solid #0057b7;
    background-color: #f9f9f9;
  }