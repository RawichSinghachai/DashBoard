import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

type Props = {}

const TestFeature = (props: Props) => {
  return (
    <>
    <Card sx={{Width:'100%' , borderRadius:3, }}>
      <CardContent>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            Test
          </Typography>
        </Stack>

        <Stack  direction="row" justifyContent="center" alignItems="center" spacing={1}>
          

          <Typography sx={{ fontSize: 20 }} color="text.secondary" >
            
          </Typography>
        </Stack>
      </CardContent>
      <Divider/>
      <Stack spacing={2} direction={{md:'row' ,sm:'row', xs:'column'}} justifyContent="space-around" sx={{margin:2}}>
        <Button variant="contained" color="success" >ON</Button>

        <Button variant="contained" color="error" >OFF</Button>
      </Stack>
    </Card>
    </>
  )
}

export default TestFeature