"use client"
import { Paper, Stack, Typography, TextField, Container, Button, Grid } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState<string>('')
  const [shortUrl, setShortUrl] = useState<string>('')
  const handleChange = (e : any) => {
    setUrl(e.target.value);
    // setShortUrl(e.target.value)
  }

  return (
    <Container  sx={{display : 'flex', alignItems : 'center', justifyContent :'center', height :'100vh', width : '100vh'}}>
      <Stack>
        <Stack alignSelf={'center'}>
          <Typography variant={'h4'} sx={{p :1}} className='text-5xl font-extrabold font-serif bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-center'>
            Welcome to ShrinkIT🔗
          </Typography>
        </Stack>
        <Paper sx={{p: 4, bgcolor:'#f9fafb'}}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField label='Enter Url' variant={'outlined'} onChange={(e:any) => (handleChange(e))} value={url} sx={{width : 1}}/>
            </Grid>
            <Grid item xs={4}>
              <Button variant={'contained'} sx={{height : 1, width : 1}}>Shorten URL</Button>
            </Grid>
            <Grid item xs={8}>
              <TextField label='Get Your Shortened URL here' value={shortUrl} sx={{width : 1}} />
            </Grid>
            <Grid item xs={4}>
              <Button variant={'contained'} sx={{height : 1, width : 1}} >Copy URL</Button>
            </Grid>
          </Grid>
        </Paper>
      </Stack>
    </Container> 
  )
}







{/* <div className='flex flex-col items-center justify-center w-screen h-screen '>
<div className='rounded-md p-4'>
  <h1 className='text-5xl font-extrabold font-serif bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-center'>
    Welcome to ShrinkIT🔗
  </h1>
</div>
<div className='bg-gray-900 p-4 rounded-md shadow-lg flex'>
  <input type="text" id="first_name" className="block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 rounded-md" placeholder="enter your URL here" required />
  <button className='p-2.5'>Shorten Url</button>
</div>
</div> */}