import React, {Component} from 'react';
import './App.css';
class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
  }
    ;
  }
  componentDidMount() {
    this.myinterval =
    setInterval(
        () => {
          this.setState({
            date:new Date()
          })}
          ,1000)
  }
  componentWillUnmount() {
          clearInterval(this.myinterval);
  }
  componentDidUpdate() {
  console.log("New Change")
  }
  render(){
      return <div>{this.state.date.toLocaleTimeString()}</div>
  }
}
export default App;