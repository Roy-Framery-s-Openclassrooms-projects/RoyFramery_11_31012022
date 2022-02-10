import './Rating.scss'

const Rating = ({ rating }) => {
    const range = [1, 2, 3, 4, 5]

    return (
        <div className="rating">
            {range.map((rangeElem) =>
                rating >= rangeElem ? (
                    <img
                        key={rangeElem.toString()}
                        className="rating__icon"
                        src="/star.svg"
                        alt=""
                    />
                ) : (
                    <img
                        key={rangeElem.toString()}
                        className="rating__icon"
                        src="/grey_star.svg"
                        alt=""
                    />
                )
            )}
        </div>
    )
}

export default Rating
