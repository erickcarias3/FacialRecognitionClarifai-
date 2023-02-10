import './App.css';
import Navigation from './Components/Navigation';
import Logo from './Components/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import ParticlesBg from 'particles-bg'
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      user:{
        email:'',
        id: '',
        name: '',
        entires:0,
        joined: ""
      }
    }
  }
  
  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn:false})
    }else if(route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  loadUser = (data) =>{
    this.setState({user: {
      email: data.email,
      id: data.id,
      name: data.name,
      entires: data.entries,
      joined: data.joined
    }})
  }


  render(){
    const {isSignedIn, route} = this.state;
    return (
      <div className="App">
        <ParticlesBg color="#0b8369" num={100} type="cobweb" bg={true}/>
        <Navigation isSignedIn= {isSignedIn} onRouteChange={this.onRouteChange}/>
        {route === 'home'
          ? 
          <div>
            <Logo/>
            <Rank/>
            <ImageLinkForm/>
          </div>
          : (
            route === 'signin'
            ?<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )

        }
      </div>
    );
  }
}

export default App;
