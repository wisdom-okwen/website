import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import csxl from '../../demos/csxl.mov';
import contageon_simulation from '../../demos/contageon_simulation.mov';
import pong from '../../demos/pong.mov';
import california from '../../demos/california.mov';
import my_fun from '../../demos/my_fun.mov';


const project_demos = [california, csxl, contageon_simulation, pong, my_fun, contageon_simulation, csxl]

export default function ProjectCard(props) {
  const handleMouseOver = () => {
    const pin = document.getElementById(`${props.id}`);
    if (pin) {
      pin.style.display = 'inline';
    }
  };

  const handleMouseLeave = () => {
    const pin = document.getElementById(`${props.id}`);
    if (pin) {
      pin.style.display = 'none';
    }
  };

  return (
    <Card 
      className='pr-card'
      sx={{ 
        width: 350, 
        height: 500, 
        boxShadow: 6, 
        margin: 2, 
        borderRadius: '8px', 
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ':hover': {
          boxShadow: 20,
        },
      }}

      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia
        id='card-media'
        sx={{ width: '100%', height: 260, pointerEvents: 'none' }}
        component='video'
        src={project_demos[props.id - 1]}
        title={props.title}
        autoPlay
        loop
        muted
        playsInline
        aria-label={props.title}
      />
      <div className="pin-section">
        <div className="pin">
          <PushPinOutlinedIcon id={`${props.id}`} sx={{ display: 'none', color: 'blue' }} />
        </div>
        <div className="circles-container">
          <CircleIcon sx={{ color: 'red', fontSize: 'small', margin: '3px 2px', border: '1px solid black', borderRadius: '50%' }} />
          <CircleIcon sx={{ color: '#ffdf00', fontSize: 'small', margin: '0 2px', border: '1px solid black', borderRadius: '50%' }} />
          <CircleIcon sx={{ color: 'green', fontSize: 'small', margin: '0 2px', border: '1px solid black', borderRadius: '50%' }} />
        </div>
      </div>
      <CardContent>
        <Typography 
          id='card-title'
          sx={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '300px' }}
          gutterBottom 
          variant="h6" component="div"
        >
          { props.title }
        </Typography>
        <Typography 
          id='card-text'
          sx={{ display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, lineHeight: '1.2em', height: '3.6em', }}
          variant="body3" 
          color="text.secondary"
          component="div"
        >
          { props.description }
        </Typography>
        <Typography 
          id='card-built-with'
          sx={{ fontWeight: 500, marginTop: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '300px' }}
          gutterBottom 
          variant="body3" component="div"
        >
          { props.built_with }
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: 'center'
        }}
      >
        <Button sx={{ 
          position: 'absolute',
          height: '35px',
          width: '100px',
          fontWeight: 'bold',
          border: '1px solid black', 
          borderRadius: '8px',
          color: 'black', 
          backgroundColor: 'ffffff', 
          textTransform: 'capitalize',
          '&:hover': { 
            color: 'white',
            backgroundColor: 'black' 
            } 
          }}
          href={props.url}
          target='_blank'
        >
          Visit!
        </Button>
      </CardActions>
    </Card>
  );
}
