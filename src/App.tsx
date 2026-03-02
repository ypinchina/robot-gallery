import React from "react";
// import robots from "./mockdata/robots.json";
import logo from "./assets/images/logo.svg";
import Robots from "./components/Robots";
import style from "./App.module.css";
import ShopCart from "./components/ShopCart";
interface Props {}
interface State {
  robotsGalleryList: any[];
  count: number;
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      robotsGalleryList: [],
      count: 0,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ robotsGalleryList: json }));
  }

  render() {
    return (
      <div className={style.app}>
        <div className={style.appHeader}>
          <img src={logo} className={style.appLogo} alt="" />
          <h1>罗伯特机器人画廊</h1>
        </div>
        <ShopCart></ShopCart>
        <div>
          <button
            onClick={() => {
              this.setState((prevState) => ({ count: prevState.count + 1 }), () => {
                console.log("count", this.state.count);
              });
              this.setState((prevState) => ({ count: prevState.count + 1 }), () => {
                console.log("count", this.state.count);
              });
            }}
          >
            增加
          </button>
          <span>计数: {this.state.count}</span>
        </div>
        <div className={style.robotList}>
          {this.state.robotsGalleryList.map((robot) => (
            <Robots {...robot} key={robot.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
