import React, {useEffect, useState} from 'react';
import './App.css'
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'

export default () => {

  const [movieList, setMovieList] = useState([]);

  const [featuredData, setfeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista Total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o filme em destaque
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setfeaturedData(chosenInfo);
      
    }

    loadAll();

  }, []);

  return(
    <div className="page">
      {/* Header
      Destaque
      As listas
      Rodapé */}

      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}