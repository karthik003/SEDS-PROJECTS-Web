import React from 'react';
import './App.css';
import Navgbar from './Components/Navgbar';
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
class App extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
            loading: true,

        }
    }
    componentDidMount= () => {
      setTimeout(() => {
        this.setState({
          loading:false
        })
      },3000)

    }
  
render() {
  return (
    <div className="App">
   { this.state.Loading ?
   (<div style={{display:"flex",alignItems:"center",width:"100%",color:"black",height:"100vh",justifyContent:"center"}}>
   <ReactLoading type={"bars"} color={"white"}/>
   </div>)
    
    :
    (<div style={{color:"#070A1A"}}> 
          <Navgbar />
    </div>)}
    </div> 
  );
}
}

export default App;
