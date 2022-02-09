import { useParams } from 'react-router-dom'
import { GetHousingById } from '../../service/api'
import Loader from '../../components/Loader'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rating from '../../components/Rating'

// CSS
import './Housing.css'

const Housing = () => {
    const { id } = useParams()
    const { data, isLoading } = GetHousingById(
        'http://localhost:8080/housing',
        id
    )
    const housing = data

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="housing__wrapper">
                    {/* gallery */}
                    <h1 className="housing__title">{housing.title}</h1>
                    <p className="housing__location">{housing.location}</p>
                    <div className="housing__tags">
                        {housing.tags.map((tag) => (
                            <Tag key={tag} tagName={tag} />
                        ))}
                    </div>
                    <div className="housing__rating-and-host">
                        <Rating rating={housing.rating} />
                        <Host host={housing.host} />
                    </div>
                    <p>Description</p>
                    <p>Équipement</p>
                </div>
            )}
        </div>
    )
}

export default Housing
