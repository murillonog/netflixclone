import React, {useEffect} from 'react';
import Tmdb from '../src/Tmdb';

export default () => {

  

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista Total
      let list = await Tmdb.getHomeList();
      console.log(list);
    }

    loadAll();

  }, []);

  return(
    <div>
      Olá Mundo!
    </div>
  );
}