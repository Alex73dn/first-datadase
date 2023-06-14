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

    const ShoppingCart1 = (props) => {
      return (
        <div>
          <h1>Shopping Cart Component</h1>
        </div>
      )
    };
    ShoppingCart1.defaultProps = { items : 0 } // рендерится ShoppingCart с начальным значением Null.

    const Items = (props) => {
      return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
    }
       Items.defaultProps = {
      quantity: 0 }
        class ShoppingCart2 extends React.Component {
      constructor(props) {
        super(props);  }
      render() {
        return <Items quantity={10} />
      }
    };// result - Current Quantity of Items in Cart: 10

    const Items = (props) => {
      return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
    };
    Items.propTypes = {
      quantity: PropTypes.number.isRequired
    };// этот встроенный запрос возвращает quantity как число! number.isRequired
    Items.defaultProps = {
      quantity: 0
    };
    class ShoppingCart extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return <Items />
      }
    };
    
    class CampSite extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <div>
            <Camper />
          </div>
        );
      }
    }// CampSite рендерит  встроенный компонент <Camper />, 
    class Camper extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <div>
            <p>{this.props.name}</p>
          </div>
        );
      }
    }// Camper рендерит свойство имя
    Camper.defaultProps = {
      name: 'CamperBot'
    };// имени присваевается дефолтное имя
    Camper.propTypes = {
      name: PropTypes.string.isRequired
    };// имени присваевается свойство строка. 
    
    class StatefulComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {firstName: 'Alex'}
      }
      render() {
        return (
          <div>
            <h1>{this.state.firstName}</h1>
          </div>
        );
      }
    };

    class StatefulComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {firstName: 'Alex'}
      }
      render() {
        return (
          <div>
            <h1>{this.state.firstName}</h1>
          </div>
        );
      }
    };// использование компонента конструктора в React.Component

    class MyComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          name: 'Initial State'
        };
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
          this.setState({
            name: 'React Rocks!'}); // меняется значение состояния this
      }
      render() {
        return (
          <div>
            <button onClick={this.handleClick}>Click Me</button>
            <h1>{this.state.name}</h1>
          </div>
        );
      }};// при нажатии на кнопку меняется значение 'Initial State' на 'React Rocks!'