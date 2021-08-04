import React from 'react'
import Button from '../../components/Button/button'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../actions/firstAction'

export default function Counter(props) {
    const dispatch = useDispatch();
    const value = useSelector(state => state.counter.value);
    const add = () => dispatch(increment(props.increment))
    const minus = () => dispatch(decrement(props.decrement))
    return (
        <>
            <h3>{value}</h3>
            <Button 
                className="btn btn-primary mr-3"
                title={"Add"}
                onClick={add}
            />
            <Button 
                className="btn btn-secondary"
                title={"Substract"}
                onClick={minus}
            />
        </>
    )
}
