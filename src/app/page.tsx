"use client"
import { Paper, Stack, Typography, TextField, Container, Button } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState<string>('')
  const [shortUrl, setShortUrl] = useState<string>('')
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setShortUrl(e.target.value)
  }

  return (
    <Container sx={{display : 'flex', alignItems : 'center', justifyContent :'center', height :'100vh', width : '100vh'}}>
      <Stack>
        <Stack alignSelf={'center'}>
          <Typography variant={'h4'} sx={{p :1}}>
            Welcome to the url shortner
          </Typography>
        </Stack>
        <Paper sx={{p: 4, bgcolor:'#f9fafb'}}>
          <Stack>
            <Stack maxWidth='sm' spacing={2}>
              <Stack direction={'row'} spacing={1} justifyContent={'space-between'}>
                <TextField label='Enter Url' onChange={(e:React.ChangeEvent<HTMLInputElement>) => (handleChange(e))} value={url} sx={{width : 1}}/>
                <Button variant={'outlined'}>Shorten URL</Button>
              </Stack>
              <Stack direction={'row'} spacing={1} justifyContent={'space-between'}>
                <TextField label='Get Your Shortened URL here' value={shortUrl} sx={{width : 1}} disabled/>
                <Button variant={'outlined'} >Copy URL</Button>
              </Stack>
            </Stack>
          </Stack>
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
