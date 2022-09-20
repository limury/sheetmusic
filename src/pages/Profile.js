import { Card, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PdfPreview from '../components/PdfPreview';

function Profile() {
  const { username } = useParams();
  const uploads = 0;
  const likes = 0;
  const saves = 0;
  const sheets = [
  { author: 'hi',
    filename: 'Glimpse of Us Sheet Music Joji (SheetMusic-Free.com).pdf',
    songName: 'Glimpse of Us',
  },
  { author: 'hi',
    filename: 'Running Up That Hill Sheet Music Kate Bush (SheetMusic-Free.com).pdf',
    songName: 'Running Up That Hill',
  },
  { author: 'hi',
    filename: 'SPACE MAN Sheet Music Sam Ryder (SheetMusic-Free.com).pdf',
    songName: 'SPACE MAN',
  },
  ];
  
  return (
    <Box sx={{display: 'flex',
              paddingX: '3rem', 
              paddingY: '1rem',
              justifyContent: 'center',
              alignItems: 'start',
            }} 
              height='100vh'>
      <Grid container sx={{ maxWidth: 'md' }} spacing={2}>
        <Grid item xs={12}>
          <Card sx={{
            padding: '1rem',
          }}>
            <Typography variant='h3'>
              {username}
            </Typography>
            <Typography>
              Uploads: {uploads}
            </Typography>
            <Typography>
              Likes: {likes}
            </Typography>
            <Typography>
              Saves: {saves}
            </Typography>
          </Card>
        </Grid>

        {
          sheets.map(({author, filename, songName}, i) => 
            <Grid item md={4} xs={12} key={i}>
              <Card>
                <Box sx={{ padding: '1rem' }}>
                  <Typography variant='h6'>
                    {songName}
                  </Typography>
                  <Typography>
                    Transcribed by: {author}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          )
        }
      </Grid>

    </Box>
  );
}

export default Profile