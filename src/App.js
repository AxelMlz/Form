import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends React.Component {

  render(){
    return (
      <form className="was-validated">
              <div>
                <h1>Login</h1>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email..."/> 
                
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password..."/>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )

  }
}
export default App 