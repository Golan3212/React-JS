
import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllGists } from "../store/gists/action";
import { CircularProgress } from "@mui/material";


const gists = [];



const Gists = () => {
    const dispatch = useDispatch();
    const {gists, request, error} = useSelector(state => state.gists);
   
    const requestGists = () => {
       dispatch(getAllGists());
    };

    useEffect(() => {
        requestGists();
    }, []);
    const renderGist = useCallback((gist) => <li key={gist.id}>{gist.description || 'No description'}</li>, []);

    if(request){
        return <CircularProgress/>;
    }
   

    return (
        <div>
            <Link className="navigation-link" to="/">Home</Link>
            {error && (
                <div>
                    <h3>Error</h3>
                    <button onClick={requestGists}>Retry</button>
                </div>)}

            <ul>
                {gists.map(renderGist)}
            </ul>
        </div>);
};

export default Gists;