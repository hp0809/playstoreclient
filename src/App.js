import React from 'react';
import Apps from './Apps';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: [],
      sort: '',
      genres: '',
      error: null
    }
  }

  setSort(sort) {
    this.setState({
      sort
    });
  }

  setGenre(genres) {
    this.setState({
      genres
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const baseUrl = 'http://localhost:8000/apps';
    const params =[];
    if(this.state.sort) {
      params.push(`sort=${this.state.sort}`);
    }
    if(this.state.genres) {
      params.push(`genres=${this.state.genres}`)
    }
    const query = params.join('&');
    const url = `${baseUrl}?${query}`;

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          apps: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not process your request at this time.'
        });
      })
  }

  render() {

    const apps = this.state.apps.map((apps, i) => {
      return <Apps {...apps} key={i}/>
    })
    return(
      <main className='App'>
        <h1>Google Play Store Apps</h1>
        <div className='sort'>
          <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor='sort'>Sort by: </label>
            <select id='sort' name='sort' onChange={e => this.setSort(e.target.value)}>
              <option value=''>None</option>
              <option value='Rating'>Rating</option>
              <option value='App'>App</option>
            </select>

            <label htmlFor='Genres'>Select a genre: </label>
            <select id='Genres' name='Genres' onChange={e => this.setGenre(e.target.value)}>
              <option value=''>None</option>
              <option value='Action'>Action</option>
              <option value='Puzzle'>Puzzle</option>
              <option value='Strategy'>Strategy</option>
              <option value='Casual'>Casual</option>
              <option value='Arcade'>Arcade</option>
              <option value='Card'>Card</option>
            </select>
            <button type='submit'>Search</button>
          </form>
          <div className='App_error'>{this.state.error}</div>
        </div>
        {apps}
      </main>
    )
  }
}

export default App;
