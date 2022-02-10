import './Host.scss'

const Host = ({ host }) => {
    const splitedName = host.name.split(' ')
    const [name, lastname] = splitedName

    return (
        <div className="host">
            <div className="host__name">
                <p className="host__firstname">{name}</p>
                <p className="host__lastname">{lastname}</p>
            </div>

            <img src={host.picture} alt="" className="host__picture" />
        </div>
    )
}

export default Host
