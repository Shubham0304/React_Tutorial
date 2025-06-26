import {useGetCounter} from './useGetCounter';

export const Counter = () => {

    const {count, increase, decrease, reset} = useGetCounter(0);

    return (

        <div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <h1> {count}</h1>
        </div>
    )


}
