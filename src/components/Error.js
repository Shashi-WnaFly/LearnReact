import { useRouteError } from "react-router-dom";


const Error = () => {
    const e = useRouteError()
    console.log(e)
    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>Something went wrong</h2>
            <h2>{e.status} : {e.statusText}</h2>
        </div>
    )
}

export default Error;