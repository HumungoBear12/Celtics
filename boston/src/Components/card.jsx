import React from 'react'

const card = ({header,image,name,wieght,height,description}) => {
    return (
        <div className='card'>
            <div className='top'>
                <h1 className='cardHead'>{header}</h1>
                <p className='nameTag'>{name}</p>
                <img className='cardIMG' src={image} alt={name} />
            </div>
            <div className='info'>
                <h4 className='stats'>Height:{height}ft</h4>
                <h4 className='stats'>Wieght:{wieght}lbs</h4>
                <p className='stats'>{description}</p>
            </div>
        </div>
    )
}

export default card
