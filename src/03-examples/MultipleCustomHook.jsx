import {useCounter, useFetch} from '../hook';
import {LoadingQuote, Quote} from './';

export const MultipleCustomHook = () => {
    const { counter, increment, } = useCounter(1);
    const {data,isLoading,hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];
  return (
        <>
        <h1>BreakingBad Quotes</h1>
        <hr />
        {
            isLoading // si el isloading esta en True muestra el componente
            ?<LoadingQuote/>   
            :<Quote author={author} quote={quote}/>   // si esta en false muestra el componente Quote
        }
        
        <button className='btn btn-primary' 
                disabled={ isLoading }
                onClick={()=>increment()}>
            Next quote
        </button>
        
        </>
    )
}
