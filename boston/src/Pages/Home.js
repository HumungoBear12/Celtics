import {React,useState} from 'react'
import Card from '../Components/card'
import Data from '../Util/data'
import Banner from '../Components/Banner'

const Home = () => {
    const [players,setPlayers] = useState(Data)
    return (
        <div className='rows'>
            <Banner/>
            {players.map((team)=>{
                const {id,name,image,height,wieght,description} = team
                return (
                    <div className='body' key={id}>
                        <Card header='Boston Celtics Player' image={image} name={name} height={height} wieght={wieght} description={description} />
                    </div>
                )
            })}
        </div>
    )
}

export default Home
