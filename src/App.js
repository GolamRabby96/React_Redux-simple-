import React from 'react';
import './App.css';
import { useSelector, useDispatch} from 'react-redux'
import { incNumber, decNumber } from './actions/index'


function App() {
  const myState = useSelector((state)=> state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Increment/Decrement Counter</h1>
              <h4>using React and Redux</h4>

              <div className="quantity">
                <a  onClick={()=>dispatch(decNumber(2))}  className='quantity_minus' title="Decrement"> <span> - </span> </a>
                <input type="text" name="quantity" className="quantity_input" value={myState} />
                <a  onClick={()=>dispatch(incNumber(2))} className='quantity_minus' title="Decrement"> <span> + </span> </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
