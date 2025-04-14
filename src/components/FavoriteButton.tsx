import useCurrentUser from '@/hooks/useCurrentUser'
import useFavorites from '@/hooks/useFavorites'
import axios from 'axios'
import React, { useCallback, useMemo } from 'react'
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai'

interface FavoriteButtonProps {
  movieId: string
}

const FavoriteButton:React.FC<FavoriteButtonProps> = ({
    movieId
}) => {
  const {mutate: mutateFavorites} = useFavorites()
  const {data: currentUser, mutate} = useCurrentUser()

  const isFavortie = useMemo(()=>{
    const list = currentUser?.favouriteIds || []
    return list.includes(movieId)
  },[currentUser, movieId])

  const toggleFavorites = useCallback(async () => {
    let response
    if(isFavortie){
      response = await axios.delete('/api/favorites',{
        data: {movieId}
      })
    }else{
      response = await axios.post('/api/favorites',{
        movieId
      })
    }
    const updatedFavoriteIds = await response.data.favoriteIds
    mutate({
      ...currentUser,
      favouriteIds: updatedFavoriteIds
    })
    mutateFavorites()
  },[movieId, isFavortie, currentUser, mutate, mutateFavorites])

  const Icon = isFavortie? AiOutlineCheck : AiOutlinePlus

  return (
    <div onClick={toggleFavorites} className='
      cursor-pointer
      w-6
      h-6
      lg:w-10
      lg:h-10
      group/item
      border-white
      border-2
      rounded-full
      flex
      items-center
      justify-center
      transition
      hover:bg-neutral-300
    '>
      <Icon className='text-white' size={25} />
    </div>
  )
}

export default FavoriteButton