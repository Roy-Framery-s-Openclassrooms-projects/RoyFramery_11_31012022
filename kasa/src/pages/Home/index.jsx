import Banner from '../../components/Banner'
import { Link } from 'react-router-dom'
import { GetAllHousing } from '../../service/api'
import Thumb from '../../components/Thumb'
import Loader from '../../components/Loader'
// CSS
import './Home.scss'

const App = () => {
    const { data, isLoading, error } = GetAllHousing(
        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
    )
    const housing = data
    const slogan = 'Chez vous, partout et ailleurs'
    const image = '/banner.png'

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className="home">
            <div className="home__banner">
                <Banner image={image} text={slogan} />
            </div>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="home__housing--wrapper">
                    {housing.map((house) => (
                        <Link to={`/housing/${house.id}`} key={house.id}>
                            <Thumb image={house.cover} title={house.title} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default App
