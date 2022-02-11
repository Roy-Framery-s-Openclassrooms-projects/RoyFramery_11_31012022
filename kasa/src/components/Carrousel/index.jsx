import { useState } from 'react'

import './Carrousel.scss'

const Carrousel = ({ pictures }) => {
    const [current, setCurrent] = useState(0)
    const picturesLength = pictures.length

    const nextPicture = (e) => {
        setCurrent(current === picturesLength - 1 ? 0 : current + 1)
    }
    const previousPicture = () => {
        setCurrent(current === 0 ? picturesLength - 1 : current - 1)
    }

    return (
        <div className="carrousel">
            {pictures.map((picture, index) => {
                return (
                    <div
                        key={index}
                        className={
                            index === current
                                ? 'slide carrousel__active-picture'
                                : 'slide carrousel__inactive-picture'
                        }
                    >
                        {index === current && (
                            <img
                                src={picture}
                                alt=""
                                className="carrousel__picture"
                            />
                        )}
                    </div>
                )
            })}
            {picturesLength > 1 ? (
                <>
                    <div
                        className="carrousel__previous"
                        onClick={previousPicture}
                    >
                        <img
                            src="/arrow-down.svg"
                            alt=""
                            className="carrousel__previous-icon"
                        />
                    </div>
                    <div className="carrousel__next" onClick={nextPicture}>
                        <img
                            src="/arrow-down.svg"
                            alt=""
                            className="carrousel__next-icon"
                        />
                    </div>
                </>
            ) : null}
            <div className="carrousel__counter">
                {current + 1}/{picturesLength}
            </div>
        </div>
    )
}

export default Carrousel
