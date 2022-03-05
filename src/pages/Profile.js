import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { changeName, exampleAction } from "../store/profile/actions";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@mui/material";





const Profile = () => {
  const { showName, name } = useSelector(state => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState(name);

  const toggleShowName = useCallback(() => {
    dispatch(exampleAction);
  }, [dispatch]);

  const handleInput = (event) => {
    setValue(event.target.value)
  }
  const handleButton = () => {
    dispatch(changeName(value))
  }


  return <div className="">
    <main className="navigation profileNav ">
      <Link className="navigation-link" to="/">Home</Link>
      <h2>Profile</h2>
      {showName && <div className="showedName element">
        Name:{name}
      </div>}
      <FormGroup>
        <FormControlLabel control={<Checkbox checked={showName} onChange={toggleShowName} />} label="toggle showName" />
      </FormGroup>
      <TextField
        value={value}
        onChange={handleInput}
      />
      <button onClick={handleButton}>Submit</button>
    </main>
    <nav>

    </nav>
  </div>
}

export default Profile