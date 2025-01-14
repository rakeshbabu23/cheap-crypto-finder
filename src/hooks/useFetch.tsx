import { FetchParams,fetchPrices} from '../services/fetchPrices'
const useFetch = () => {
   async function prices({ currency ,
  crypto,
  amount}:FetchParams){
    const res=await fetchPrices({ currency, crypto, amount })
    return res;
  }
  return { prices };
}

export default useFetch