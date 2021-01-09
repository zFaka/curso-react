import React, {useMemo} from 'react';
import queryString from 'query-string';
import useForm from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import {useLocation} from 'react-router-dom';
import getHeroeByName from '../../selectors/getHeroesByName';

const SearchScreen = ({history}) => {

  const location = useLocation();
  const {q=''} = queryString.parse(location.search);

  const [formValues, handleInputChange]= useForm({
    searchText:q
  });

  const {searchText} = formValues;
  const heroesFiltered = useMemo(()=>getHeroeByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`?q=${searchText}`);
  };



  return (
    <>
      <h1>Search Screen</h1>
      <div className='row'>


        <div className="col-5">
          <h4> Search Form </h4>
          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder= 'Find hero'
              className= 'form-control'
              autoComplete='off'
              name='searchText'
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              type='submit'
              className='btn m-1 btn-black btn-outline-primary'
            >
              Search
            </button>
          </form>
        </div>


        <div className='col-7'>
          <h4> Results </h4>

          {
            (q==='')&&
              <div className='alert alert-info'>
                Search a Hero
              </div>
          }

          {
            (q!=='' && heroesFiltered.length===0)&&
              <div className='alert alert-danger'>
                {q} is not a Hero
              </div>
          }

          {

            heroesFiltered.map(hero=>(
              <HeroCard 
                key={hero.id}
                {...hero}
              />
            ))

          }

        </div>

      </div>
    </>
  )}

export default SearchScreen;
