import { useCallback } from "react";
import { Link } from "react-router-dom";
import { exampleAction } from "../store/profile/actions";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux";





const Profile = () => {
  const { showName, name } = useSelector(state => state);
  const dispatch = useDispatch();

const toggleShowName = useCallback(() =>{
  dispatch(exampleAction);
}, [dispatch])

  return <div className="">
    <main className="navigation profileNav ">
    <Link className="navigation-link" to="/">Home</Link>
      <h2>Profile</h2>
      {showName && <div className="showedName element">
        Name:{name}
      </div>}
      <FormGroup>
      <FormControlLabel  control={<Checkbox checked={showName} onChange={toggleShowName} />} label="toggle showName" />
    </FormGroup>
    </main>
    <nav>
     
    </nav>
  </div>
}

export default Profile