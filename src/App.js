import logo from './logo.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import Game from './components/Game'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'
import { Paper, Skeleton, Stack, styled } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

function App() {
    const [data, setData] = useState(null)
    const [clicked, setClicked] = useState(null)

    const api_url =
        'https://ipgeolocation.abstractapi.com/v1/?api_key=18308436a43c4b2da403a9a6909cb85c'
    //function that calls and parses api data properly
    async function api_call() {
        const response = await fetch(api_url)
        const localDate = await response.json()

        let result = JSON.parse(JSON.stringify(localDate))
        let city_state = result['city'] + ', ' + result.region
        document.getElementById('country_output').textContent =
            'Your IP: ' + result['ip_address']
        document.getElementById('city_state_output').innerHTML =
            'Location: ' +
            result['city'] +
            ', ' +
            result['region'] +
            ', ' +
            result['country'] +
            ' ' +
            result.flag['emoji'] +
            ' Continent: ' +
            result.continent

        let time = result.timezone['current_time']
        document.getElementById('ISP_output').innerHTML =
            'Current ISP: ' + result.connection['isp_name']
        document.getElementById('timezone').innerHTML =
            'Timezone: ' + result.timezone['abbreviation']
        document.getElementById('time').innerHTML =
             time

        const mapData = document.getElementById('map')
        const lon = result['longitude']
        const lat = result['latitude']
        //creates the map using latitude and longitude
        mapData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`

        const img = document.querySelector('img')
        img.src = result.flag['png']
    }

    return (
        <div className='App'>
            <Card id='welcome' variant='outlined'>
                Welcome!, Click to Geolocate!
            </Card>
            <Button
                variant='outlined'
                onClick={() => {
                    //teranary operator
                    var isClicked = clicked != null ? clicked : false
                    setClicked(!isClicked)


                    if (clicked === true) {
                        document.getElementById('hidden').style.opacity = 0

                    } else {
                        document.getElementById('hidden').style.opacity = 1.0
                        api_call()
                    }
                }}
            >
                Click me
            </Button>
            {/*creates the webpage*/}
            <div class='body' id='hidden'>
                <div class='leftDiv'>
                    {/*makes the left handside stack*/}
                    <Stack spacing={5}>
                        <Item id='country_output'></Item>
                        <Item id='ISP_output'></Item>
                        <Item id='city_state_output'></Item>
                    </Stack>
                    <iframe id='map'></iframe>
                </div>

                {/*makes the right side div to hold the countries flag and timezone*/}
                <div class='rightDiv'>
                    <div class='flagDiv'>
                        <img />
                    </div>
                    {/*timezone*/}
                    <div id = 'timezone'>
                    </div>
                    {/*time*/}
                    <div id = 'time'>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default App