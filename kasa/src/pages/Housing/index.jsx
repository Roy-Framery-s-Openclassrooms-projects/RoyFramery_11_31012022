import { useParams } from 'react-router-dom'
import { GetHousingById } from '../../service/api'
import Loader from '../../components/Loader'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Dropdown from '../../components/Dropdown'
import Carrousel from '../../components/Carrousel'

// CSS
import './Housing.scss'

const Housing = () => {
    const { id } = useParams()
    const { data, isLoading } = GetHousingById(
        'https://github.com/Roy-Framery-s-Openclassrooms-projects/RoyFramery_11_31012022/blob/dev/kasa/src/__mocks__/data.json',
        id
    )
    const housing = data

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="housing">
                    <Carrousel pictures={housing.pictures} />
                    <div className="housing__content">
                        <div className="housing__informations">
                            <h1 className="housing__title">{housing.title}</h1>
                            <p className="housing__location">
                                {housing.location}
                            </p>
                            <div className="housing__tags">
                                {housing.tags.map((tag) => (
                                    <Tag key={tag} tagName={tag} />
                                ))}
                            </div>
                        </div>
                        <div className="housing__rating-and-host">
                            <Rating rating={housing.rating} />
                            <Host host={housing.host} />
                        </div>
                    </div>
                    <div className="housing__dropdowns">
                        <Dropdown
                            title="description"
                            content={housing.description}
                        />
                        <Dropdown
                            title="équipement"
                            content={housing.equipments}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Housing
