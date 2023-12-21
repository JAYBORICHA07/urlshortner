import { useState } from 'react'
import './App.css'
import { Container, Stack, TextField, Typography, Paper } from '@mui/material'


function App() {
  const [url, setUrl] = useState<string>('')
  const [shortUrl, setShortUrl] = useState<string>('')
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  }

  return (
    <Container sx={{display : 'flex', alignItems : 'center', justifyContent :'center', height :'100vh', width : '100%' }}>
      <Paper sx={{p: 4, width : '600px'}}>
        <Stack>
          <Stack alignSelf={'center'}>
            <Typography variant={'h4'} sx={{p :1}}>
              Welcome to the url shortner
            </Typography>
          </Stack>
          <Stack maxWidth='sm' spacing={2}>
            <Typography>Enter your URL here</Typography>
            <TextField label='Enter Url' onChange={(e:React.ChangeEvent<HTMLInputElement>) => (handleChange(e))} value={url}/>
            <Typography>Shorterned url</Typography>
            <TextField label='' value={shortUrl}/>
          </Stack>
          </Stack>
        </Paper>
    </Container>
  )
}

export default App
