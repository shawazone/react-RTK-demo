import React, { useState } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { ordered, restocked} from './cakeSlice'

const CakeView = () => {

  const numOfCakes=   useSelector((state)=> state.cake.numOfCakes)
  const dispatch = useDispatch()
  const [restockNumber ,setRestockNumber] = useState(1)
  
  return (
    <div>
       <h2>Number of cakes {numOfCakes}</h2>
       <input type="number"  value={restockNumber} onChange={(e) => setRestockNumber(parseInt(e.target.value))} /><br></br>
       <button onClick={()=> dispatch(ordered())}>Order cake </button>
       <button onClick={()=> dispatch(restocked(restockNumber))}>Restock cakes</button>
           </div>
  )
}

export default CakeView
