import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { removeCustomerAction } from './store/customerReducer';

function App() {
	const dispatch = useDispatch();
	const cash = useSelector(state => state.cash.cash)
	const customers = useSelector(state => state.customers.customers)

	const addCash = (cash) => {
		dispatch({type: "ADD_CASH", payload: cash})
	}

	const getCash = (cash) => {
		dispatch({type: "GET_CASH", payload: cash})
	}

	const addCustomer = (name) => {
		const customer = {
			name,
			id: Date.now()
		}
		dispatch(addCustomerAction(customer))
	}

	const removeCustomer = (customer) => {
		dispatch(removeCustomerAction(customer.id))
	}

	return (
		<div className={'App'}>
			<div style={{fontSize:"3rem"}}>{cash}</div>
			<div style={{display:"flex", justifyContent:"center"}}>
				<button style={{padding:"10px 30px", margin:"20px 20px"}} onClick={()=>addCash(Number(prompt()))}>
					Пополнить счет
				</button>
				<button style={{padding:"10px 30px", margin:"20px 20px"}} onClick={()=>getCash(Number(prompt()))}>
					Снять со счета
				</button>
				<button style={{padding:"10px 30px", margin:"20px 20px"}} onClick={()=>addCustomer(prompt())}>
					Добавить клиента
				</button>
			</div>
				{customers.length > 0 
					? 
					<div style={{fontSize: "2rem"}}>
						{customers.map(customers => 
						<div onClick={()=>removeCustomer(customers)}>{customers.name}</div>
						)}
					</div>
					:
					<div style={{fontSize: "2rem"}}>
						<p>Клиентов нет!</p>
					</div>
				}
		</div>
  	);
}

export default App;
