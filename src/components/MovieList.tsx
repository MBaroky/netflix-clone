"use client"
import React from 'react'
import { isEmpty } from 'lodash'
import useMovieList from '@/hooks/useMovieList'
import MovieCard from './MovieCard'

interface MovieListProps {
  data?: Record<string, any>[],
  title: string
}

const MovieList:React.FC<MovieListProps>= ({ title}) => {

  const {data} = useMovieList()
  if(isEmpty(data)) return null

  return (
    <div className='px-4 md:px-12 mt-4 space-y-8'>
      <p className='text-white text-md md:text-xl lg:text-2xl font-semibold'>
        {title}
      </p>
      <div className='grid grid-cols-4 gap-2'>
        {data.map((movie: { id: string; thumbnailUrl: string; title: string }) => (
          <MovieCard data={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}

export default MovieList