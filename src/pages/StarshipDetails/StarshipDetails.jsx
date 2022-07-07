import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/api-calls';


const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()
  


  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipDetails)
  }
    fetchDetails()
  }, [location.state.starship.url]
  )

  return (
    starshipDetails ?
      <div>
        {starshipDetails.name}
        {starshipDetails.model}
        <Link to='/'><h1>Return</h1></Link>
      </div>
    :
      <>
        <p>Loading...</p>
      </>
  );
}

export default StarshipDetails ;