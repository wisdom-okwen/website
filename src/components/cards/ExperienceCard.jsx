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
          <Typography sx={{ fontWeight: 590 }} variant={isMobile ? "h6": "h5"} component="div">
            {props.company}
          </Typography>
          <Typography sx={{ mb: {sm: 1, md: 2 }}} variant={isMobile ? "body4" : "body3" } color="text.secondary">
            {props.title}
          </Typography>
          <br/>
          <Typography sx={{fontStyle: 'italic', fontWeight: 505}} variant={isMobile ? "body5" : "body4"} color="010B13">
            {' ' + props.team}
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
