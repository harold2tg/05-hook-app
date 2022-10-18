import React from 'react'
import { useFetch } from '../hook/useFetch'

export const MultipleCustomHook = () => {
    const {data,isLoading,hasError} = useFetch('https://www.breakingbadapi.com/api/quotes/1')
    const {quote, author } = !!data && data[0].quote
  return (
        <>
        <h1>BreakingBad Quotes</h1>
        <hr />
        {
            (isLoading)
            ?(
                <div className="alert alert-info text-cennter">
                loading
            </div>   
            ):(
                <blockquote className='blockquote text-end'>
                    <p className='mb-2'>{data[0].quote}</p>
                    <footer className='blockquote-footer'>
                        {data[0].author}
                    </footer>
                </blockquote>     
            )
        }
        <button className='btn btn-primary'>
            next quote
        </button>
        
        </>
    )
}
