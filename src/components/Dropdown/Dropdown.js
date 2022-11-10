import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clientAxios from '../../config/clientAxios';

function Dropdown({url}) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [genres, setGenres] = useState([]);


  useEffect(() => {
    async function getData() {
      const request = await clientAxios.get(url);
      setGenres(request.data.genres);
    }
    getData();
  }, [url]);


  return (
    <>
      <ul
        onClick={handleClick}
        className= "dropdown-menu show"
      >
        {genres.map((genre, index) => {
          return (
            <li key={index} >
              <Link
                className="dropdown-item"
                
                to= { { pathname:`/genre/${genre.name}/${genre.id}` } }
                state= {{ id: genre.id, name:genre.name}}
               >
                {genre.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;