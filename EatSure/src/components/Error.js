import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err= useRouteError();//gives an error object
    console.log(err);
    return (
        <>
        <h1>OOps something went wrong {err.data}</h1>
        </>
    )
}
export default Error;