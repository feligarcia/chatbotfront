import classes from "./App.module.css";
import Chat from "./Chat";

function App() {
  return (
    <>
      <div className={classes.App}>
        <h2>Chatbot con Groq </h2>
        <p>Front para chatear con bot en groq</p>
        <a
          className={classes.applink}
          href="https://github.com/feligarcia"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Juan Felipe Garcia
        </a>
      </div>
      <Chat />
    </>
  );
}

export default App;
