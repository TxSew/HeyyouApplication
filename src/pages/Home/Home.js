import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './../../apps/Counter'

function Home() {
    const count = useSelector(state => state.counter.count)
    console.log('hi', count);
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <span>{count}</span>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement(count - 1))}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
export default Home;