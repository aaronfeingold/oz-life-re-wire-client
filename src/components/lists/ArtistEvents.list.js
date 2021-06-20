import React from 'react'
import { useSelector } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit"
import ArtistEvent from "../cards/ArtistEvent.card"
import ErrorMessage from '../errors/ErrorMessage';

<<<<<<< HEAD
const ArtistEventsList = ({apiStatus}) => {
  let apiErrorMessage = useSelector(state => state.aes.error);
  
  let ae_obs = useSelector(state => state.aes.artist_events)

  let cards = ae_obs.map(ae => <ArtistEvent key={nanoid()} ae={ae}/>)
  
=======
const ArtistEventsList = ({apiStatus, apiErrorMessage, query, filterStatus}) => {
  let ae_objs = useSelector(state => state.aes.artist_events)

  let cards = ae_objs.map(ae => <ArtistEvent key={nanoid()} ae={ae}/>)

>>>>>>> refactor
  let sorted_cards = cards.sort((a,b)=> (Object.keys(a.props.ae) > Object.keys(b.props.ae)) ? 1 : -1)

  if (filterStatus === true) {
    let findAlike = query.toLowerCase()
    let filtedCards = sorted_cards.filter((card) => {
      let ae = card.props.ae
      let artist_name = Object.keys(ae)[0]
        if (artist_name.includes(findAlike)){
          return card
        }
    
    })

    sorted_cards = [...filtedCards]
  }
 
  return(
    <>
      {apiStatus === 'loading' ? (
        <div> Loading </div>
      ):apiStatus === 'failed' ? (
          <ErrorMessage error={apiErrorMessage} />
      ):(
        <>
        {sorted_cards}
        </>
      )}
    </>
  )
}

export default ArtistEventsList