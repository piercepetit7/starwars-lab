import { useEffect, useState } from 'react';
import { getAllStarships } from '../../services/api-calls';
import { Link } from 'react-router-dom'

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
      console.log(starshipData.results)
    }
    fetchStarships()
  }, [])

  return ( 
    <div>
      <div>
        <h1>Starship list</h1>
        <div className="icon-container">
          {starships.map((starship, idx) =>
          <Link to='/starship' state={{starship}} key={idx}>
            <div className='class-div'>
              {starship.name}
            </div>
          </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default StarshipList;