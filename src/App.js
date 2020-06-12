import React from 'react';
import './App.css';
import Navgbar from './Components/Navgbar';
import Footer from './Components/Footer';
import Landingpage from './Components/Landingpage';
import About from './Components/About';
import Contact from './Components/Contact';
import Teams from './Components/Teams';
import Conquests from './Components/Conquests';
import loader from './Assets/loader1.gif'
class App extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
            loading: true,

        }
    }
render() {
  const { loading } = this.state;
    
  if(!loading) { // if your component doesn't have to wait for an async action, remove this block 
    return(
      <div style={{backgroundColor:"black",margin:"0px auto",height:"100vh"}}>    
           <img src={loader} alt="loading..." style={{margin:"0px 25%"}}/>
      </div>
    ); // render null when app is not ready
  }
  return (
    <div style={{backgroundColor:"black"}}>
    
      <Navgbar />
     
    </div>
  );
}
}

export default App;
