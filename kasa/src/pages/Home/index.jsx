import { useEffect } from 'react'
import Banner from '../../components/Banner'
import { Link } from 'react-router-dom'
import { GetAllHousing } from '../../service/api'
import Thumb from '../../components/Thumb'
import Loader from '../../components/Loader'
// CSS
import './Home.css'

const App = () => {
    const { data, isLoading, error } = GetAllHousing(
        'http://localhost:8080/housing'
    )
    const housing = data

    useEffect(() => {
        document.title = 'Accueil'
    }, [])

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
