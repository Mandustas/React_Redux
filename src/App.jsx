import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
	const dispatch = useDispatch();
	const cash = useSelector(state => state.cash)

	const addCash = (cash) => {
		dispatch({type: "ADD_CASH", payload: cash})
	}

	const getCash = (cash) => {
		dispatch({type: "GET_CASH", payload: cash})
	}

	return (
		<div className="App">
	  		<div className={'app'}>
			  <div style={{fontSize:"3rem"}}>{cash}</div>
				<div style={{display:"flex",justifyContent:"center"}}>
		  			<button style={{padding:"10px 30px", margin:"20px 20px"}} onClick={()=>addCash(Number(prompt()))}>
						Пополнить счет
		  			</button>
		  			<button style={{padding:"10px 30px", margin:"20px 20px"}} onClick={()=>getCash(Number(prompt()))}>
						Снять со счета
		  			</button>
				</div>
	  		</div>
		</div>
  	);
}

export default App;
