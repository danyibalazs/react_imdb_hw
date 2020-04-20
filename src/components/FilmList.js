import React, {Component} from 'react';
import Film from '../components/Film';

class FilmList extends Component {
  render(){

    const filmNodes = this.props.films.map(film => {
      return <Film name={film.name} url={film.url} key={film.id}></Film>
    })

    return (
      <div>
        {filmNodes}
      </div>
    )
  }
}

export default FilmList;