import React, {useEffect} from 'react';
import Tmdb from '../src/Tmdb';

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista Total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();

  }, []);

  return(
    <div>
      Olá Mundo!
    </div>
  );
}