import React from "react";
import axios from "axios";
import styled from 'styled-components'

// function App() {
//   return (

//   );
// }
class App extends React.Component {
  state = {
    github: {},
    login: ""
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/Ironipad64`)
      .then((res) => {
        console.log(res)
        this.setState({
          github: res.data
        });
      })
      .catch((err) => console.log(err));
  }

  // handleChanges = (e) => {
  //   e.preventDefault();
  //   axios
  //     .get('https://api.github.com/users/Ironipad64')
  //     .then().catch()
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .get(`https://api.github.com/users/${this.state.login}`)
  //     .then((res) => {
  //       this.setState({
  //         login: res.data
  //       });
  //     })
  //     .catch((err) =>
  //       console.log(err)
  //     );
  // };




  render() {
    return (
      <StyledApp>
        <div>
          <h1> Github User Cards </h1>
          {/* <form>
            <input value={this.state.login} onChange={this.handleChanges} />
            <button>Enter</button>
          </form> */}

          <StyledCard>
            {/* <img alt="" src="https://st3.depositphotos.com/12985848/19523/i/600/depositphotos_195230158-stock-photo-toned-picture-silhouette-hacker-hoodie.jpg" /> */}
            <img alt="" src={this.state.github.avatar_url} />
            <h2>{this.state.github.login}</h2>
            <p>Followers:{this.state.github.followers}</p>
            <p>Following: {this.state.github.following}</p>
          </StyledCard>
        </div>
      </StyledApp>
    )
  }

}
export default App;


const StyledApp = styled.div`
  display: flex;
	flex-direction: column;	
	align-items: center;
	font-weight: 330;
	text-align: center;
  opacity: 2;
  h1{
    font-size: 3rem;
  }
`

const StyledCard = styled.div`
  border: 1.5px solid black;
  margin: 5%;
  display: flex;
	flex-direction: row;	
  justify-content: space-around;
	align-items: center;
  background-color: white;
  margin-right: 15%;
  margin-left: 15%;
  img{
    width: 30%;
    height: 30%;
    border-radius: 50%;
    margin-top: 10px;
    margin-bottom: 15px;
  }

`