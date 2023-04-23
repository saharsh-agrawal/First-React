const navbar = (
  <nav
    class="navbar navbar-expand-md navbar-dark bg-dark"
    aria-label="Fourth navbar example"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        Expand at md
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown04"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdown04">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <form>
          <input
            class="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
  </nav>
);
console.log(navbar);
function NavBar() {
  return navbar;
}

function MainComponent(props) {
  return <h1>I {props.name}. Iam learning React</h1>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

/*ReactDOM.render(
  <div>
    <NavBar />
    <MainComponent name="Saharsh" />
    <Clock />
  </div>,
  document.getElementById("root")
);*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      questions: [
        {
          questionText: "What is the capital of France?",
          answerOptions: [
            { answerText: "New York", isCorrect: false },
            { answerText: "London", isCorrect: false },
            { answerText: "Paris", isCorrect: true },
            { answerText: "Dublin", isCorrect: false },
          ],
        },
        {
          questionText: "Who is CEO of Tesla?",
          answerOptions: [
            { answerText: "Jeff Bezos", isCorrect: false },
            { answerText: "Elon Musk", isCorrect: true },
            { answerText: "Bill Gates", isCorrect: false },
            { answerText: "Tony Stark", isCorrect: false },
          ],
        },
        {
          questionText: "The iPhone was created by which company?",
          answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
          ],
        },
        {
          questionText: "How many Harry Potter books are there?",
          answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "4", isCorrect: false },
            { answerText: "6", isCorrect: false },
            { answerText: "7", isCorrect: true },
          ],
        },
      ],
      showScore: false,
      score: 0,
    };
  }

  handleAnswerButtonClick(isCorrect) {
    if (isCorrect) {
      this.setState({
        score: this.state.score + 1,
      });
    }

    if (this.state.currentQuestion < this.state.questions.length - 1) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
      });
    } else {
      this.setState({
        showScore: true,
      });
    }
  }

  render() {
    return (
      <div className="app">
        {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
        {this.state.showScore ? (
          <div className="score-section">
            You scored {this.state.score} out of {this.state.questions.length}
          </div>
        ) : (
          <div>
            <div className="question-section">
              <div className="question-count">
                <span>Question {this.state.currentQuestion + 1}</span>/
                {this.state.questions.length}
              </div>
              <div className="question-text">
                {this.state.questions[this.state.currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {this.state.questions[
                this.state.currentQuestion
              ].answerOptions.map((answerOption, index) => (
                <button
                  onClick={() =>
                    this.handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
