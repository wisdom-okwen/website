import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function ExperienceCard(props) {
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <Box sx={{ 
        width: 350, 
        height: 200, 
        margin: '0 5px', 
        boxShadow: 3,
        ":hover": {
          cursor: 'grab'
        }
      }}
    >
      <Card sx={{ marginBottom: 1, width: isMobile ? 290 : 350, height: 200 }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontWeight: 600 }} variant={isMobile ? "h6": "h5"} component="div">
            {props.company}
          </Typography>
          <Typography sx={{ mb: {sm: 1, md: 2 }}} variant={isMobile ? "body4" : "body3" } color="text.secondary">
            {props.title}
          </Typography>
          <Typography variant={isMobile ? "body" : "body3"} color="text.secondary">
            {props.team}
          </Typography>
          <Typography variant="body2">
            {props.tech_stack}
          </Typography>
          <hr /> 
          <Typography variant="body2">
            {props.date}
          </Typography>
      </CardContent>
      </Card>
    </Box>
  );
}
