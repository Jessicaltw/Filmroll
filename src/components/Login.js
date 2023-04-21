import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from 'react-redux'
import { define as reducerDefine, add as reducerAdd} from '../redux/login'
import { useState } from 'react';




import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, query, orderBy, limit} from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyBwz2KQyp-L542C7sTXIXBzkquM4jVRV_c",
  authDomain: "filmroll-7ac29.firebaseapp.com",
  projectId: "filmroll-7ac29",
  storageBucket: "filmroll-7ac29.appspot.com",
  messagingSenderId: "254118101228",
  appId: "1:254118101228:web:c75c27c395c0faaec4e5c9"
};


export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getSnapshots() {
    const col = collection(db, 'database');
    const snapshot = await getDocs(col);
    const login = snapshot.docs.map(doc => doc.data());

    console.log(login);
    return login;
  }

  async function addSnapshot(){

    const timestamp = String(new Date().getTime());
    const json = window.localStorage.getItem("payload");

    await setDoc(doc(db, "database", timestamp), {
        user: json,
        login_time: timestamp
    });             

}

  const field = useSelector((state) => state.login.field);
  const items = useSelector((state) => state.login.items);

  const dispatch = useDispatch()

  function add(){
    dispatch (reducerAdd(field))
  }
  function define(value){

    dispatch (reducerDefine(value))

  }
   
  const [password, setPassword] = useState('');

  const payload = useSelector((state) => state);
  const json = JSON.stringify(payload)
  window.localStorage.setItem("payload",json);

  return (
    <Container component="main" maxWidth="xs" sx={{ height: 730 }} >
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ color:'black' }}>
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={field}
            onChange={(e) => define(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel sx={{ color:  'black'}} 
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 , backgroundColor:  '#B47D0E'}}
            onClick={(e) => addSnapshot()}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link sx={{ color:  '#B47D0E'}} href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link sx={{ color:  '#B47D0E'}} href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}