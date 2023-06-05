import { useSelector, useDispatch } from "react-redux"
import {
	increment,
	decrement,
	reset,
	incrementByAmount,
} from "../features/counter/counterSlice"
import { useState } from "react"

const Counter = () => {
	const [amount, setAmount] = useState(0)
	const count = useSelector((state) => state.counter.count)
	const dispatch = useDispatch()

	return (
		<section>
			<p>{count}</p>
			<div>
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
			</div>

			<div>
				<input
					type="number"
					name="amount"
					value={amount}
					onChange={(e) => setAmount(Number(e.target.value))}
				/>
				<div>
					<button onClick={() => dispatch(incrementByAmount(amount))}>
						Add Amount
					</button>
					<button
						onClick={() => {
							dispatch(reset())
							setAmount(0)
						}}
					>
						Reset
					</button>
				</div>
			</div>
		</section>
	)
}

export default Counter
