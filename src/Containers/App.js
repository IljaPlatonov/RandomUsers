import { Component } from 'react';
import './App.css';
import SearchBox from '../Components/SearchBox';
import ProfileList from '../Components/ProfileList';
import '../Components/Select.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
    isLoading: true,
    profiles: [],
    searchfield: '',
    value: ''
    }
  }

 componentDidMount() {
   this.fetchData();
 }

fetchData = () => {
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.results.map(user => (
      {
        name: `${user.name.first} ${user.name.last}`,
        username: `${user.login.username}`,
        picture : `${user.picture.large}`,
        email: `${user.email}`,
        location: `${user.location.city}, ${user.location.state}, ${user.location.country}`
      }
    )))
    .then(profiles => this.setState({
      profiles,
      isLoading: false
    }))
    .catch(e => console.log(e))
    }

    AlphabeticalOrder() {
    const { profiles } = this.state;
      profiles.sort(function(a, b){
        if(a.username < b.username) { return -1; }
        if(a.username > b.username) { return 1; }
        return 0;
    })
    }

    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
    }

    handleChange = (event) => {
      this.setState({ value: event.target.value }) 
        if (
        this.state.value = 'Alphabetical'
        ) return this.AlphabeticalOrder();
    }

render() {
  const { searchfield, isLoading, profiles } = this.state;
  const filteredProfiles = profiles.filter(profile => {
    return profile.username.toLowerCase().includes(searchfield.toLowerCase());
  });
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome!</h1>
      </header>
      <div>
        <div className='flex'>
          <SearchBox searchChange={this.onSearchChange}/>
          <select className='select' name='Order' id='order-select' onChange={this.handleChange}>
            <option value=''>Select order:</option>
            <option value='Alphabetical'>Alphabetical</option>
          </select>
          <button className='Button' type='button' onClick={this.fetchData}>Generate</button>
        </div>
          {
            !isLoading && profiles.length > 0 ? 
            <ProfileList profiles={filteredProfiles}/> : 
            <h1>Loading...</h1>
          } 
      </div>
    </div>
  );
  }
}

export default App;
