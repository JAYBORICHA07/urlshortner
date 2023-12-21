import { useState } from 'react'
import './App.css'
import { Container, Stack, TextField, Typography } from '@mui/material'


function App() {
  const [url, setUrl] = useState<string>('')
  const [shortUrl, setShortUrl] = useState<string>('')
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  }

  return (
    <Container maxWidth={'xl'} sx={{display : 'flex', alignItems : 'center', justifyContent :'center'}}>
      <Stack>
        <Typography sx={{p :1}}>
          Welcome to the url shortner
        </Typography>
        <Stack maxWidth='sm' spacing={2}>
          <Typography>Enter your URL here</Typography>
          <TextField label='Enter Url' onChange={(e:React.ChangeEvent<HTMLInputElement>) => (handleChange(e))} value={url}/>
          <Typography>Shorterned url</Typography>
          <TextField label='' value={shortUrl}/>
        </Stack>
        </Stack>
    </Container>
  )
}

export default App
