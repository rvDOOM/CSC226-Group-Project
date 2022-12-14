import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent";
import Game from "./components/Game";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import {useState} from "react";
import {Paper, Skeleton, Stack, styled} from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function App() {
    const [data, setData] = useState(null);
    const [clicked, setClicked] = useState(null);

  return (
    <div className="App">
        <Card id = "welcome" variant="outlined">Welcome!, Click to Geolocate!</Card>

            <Button variant = "outlined"
                onClick={() => {
                    //teranary operator
                    var isClicked =  clicked != null ? clicked : false;
                    setClicked(!isClicked);

                    //alert('clicked');
                    if (clicked === true){
                        document.getElementById("hidden").style.opacity = 1.0;
                    }
                    else{
                        document.getElementById("hidden").style.opacity = 0;
                    }

                        fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=18308436a43c4b2da403a9a6909cb85c')
                            .then(response => response.json())
                            .then(data => setData(data));

                }}
            >
                Click me
            </Button>

        <div class="body" id="hidden">
            <div class="leftDiv">
                {/*makes the left handside stack*/}
                <Stack spacing={5}>
                    <Item>Continent/country from api</Item>
                    <Item>City and State(add a building icon or something maybe)</Item>
                    <Item>IP address and ISP maybe</Item>
                </Stack>
            </div>
            {/*makes the right side circle to hold the countries flag*/}
            <div class ="flagDiv">color is a placeholder the flag png would go here</div>

        </div>

        {/*this code below is how to get the api call to display but idk how to parse it yet*/}
        {/*JSON.stringify(data)*/}

        putting the map and using latitude and longitude would be cool down here but if not we can fill the space.




        {/*<Game></Game>*/}
        {/*  <MyComponent/>*/}
        {/*<header className="App-header">*/}
        {/*  <img src={logo} className="App-logo" alt="logo" />*/}
        {/*  <p>*/}
        {/*    Edit <code>Hello World</code> and save to reload.*/}
        {/*  </p>*/}
        {/*  <a*/}
        {/*    className="App-link"*/}
        {/*    href="https://reactjs.org"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Learn React*/}
        {/*  </a>*/}
        {/*</header>*/}
    </div>
  );
}

export default App;
