import React from 'react'
import GuestCounter from '../guests/GuestCounter'
import GuestFilter from '../guests/GuestFilter'
import Guests from '../guests/Guests'
import GuestSearch from '../guests/GuestSearch'
import GuestsForm from '../guests/GuestsForm'

const Home = () => {
    return (
        <div className='app-container'>
            <div className='main'>
                <div className='filter'>
                    <GuestFilter/>
                    <GuestSearch/>
                </div>
            <GuestsForm/>
            <GuestCounter/>
            
            </div>
            <Guests/>
        </div>
    )
}

export default Home
