const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};
const Fruits = () => {
  return (
    <div>
        <TypesOfFruit />
    </div>
  );
};
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
          <Fruits />
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);}
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};
ReactDOM.render(<TypesOfFood /> , document.getElementById('challenge-node')) // генерация вывода TypesOfFood посредствам renderDom

const List = (props) => {
  return <p>{props.tasks.join(', ')}</p>
};
class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["walk dog", "workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "workout", "jumping"]}/>
      </div>
    );  }}; // <p>{props.tasks.join(', ')}</p> добавляет массив событий к class ToDo extends React.Component