"use client"
import React from 'react'
import { isEmpty } from 'lodash'
import MovieCard from './MovieCard'
import MovieCardSkeleton from './MovieCard/skeleton'

interface MovieListProps {
  data?: Movie[],
  title: string,
  hook: () => { data: Movie[]; error: any; isLoading: boolean; }
}

const MovieList:React.FC<MovieListProps> = ({ title, hook }) => {

  const {data, isLoading} = hook();

  return (
    <div className='px-4 md:px-12 mt-4 space-y-8'>
      <p className='text-white text-md md:text-xl lg:text-2xl font-semibold'>
        {title}
      </p>
      <div className='grid grid-cols-4 gap-2'>
        {
          isLoading ? [...Array(4)].map((u, index) => (
              <MovieCardSkeleton key={index} />
            )):
        data.map((movie: Movie) => (
          <MovieCard data={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}

export default MovieList