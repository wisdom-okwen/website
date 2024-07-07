import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import about from '../../images/about.png';
import './About.css';
import { message, name } from './message';
import Typewriter from './TypeWriter';

const socialMediaLinks = {
    gitHub: 'https://github.com/wisdom-okwen',
    linkedIn: 'https://www.linkedin.com/in/wisdom-okwen-05b09a184/',
    youTube: 'https://www.youtube.com/channel/UC2JKlaNuQQKmPVlgxpoVCbA',
    instagram: 'https://www.instagram.com/owska_joe/',
    faceBook: 'https://www.facebook.com/profile.php?id=100087329172175'
}

function About() {
    return (
        <div id='about'>
            <div className='left'>
                <img src={ about } alt="profile" />
                <div className="socials">
                    <a href={socialMediaLinks.gitHub} target="_blank" rel="noreferrer"><GitHubIcon id="github"/></a> <span className='divider'></span>
                    <a href={socialMediaLinks.linkedIn} target="_blank" rel="noreferrer"><LinkedInIcon id="linkedin"/></a> <span className='divider'></span> 
                    <a href={socialMediaLinks.youTube} target="_blank" rel="noreferrer"><YouTubeIcon id="youtube"/></a> <span className='divider'></span> 
                    <a href={socialMediaLinks.instagram} target="_blank" rel="noreferrer"><InstagramIcon id="instagram"/></a> <span className='divider'></span>
                    <a href={socialMediaLinks.faceBook} target="_blank" rel="noreferrer"><FacebookIcon id="facebook"/></a> 
                </div>
            </div>
            <div className="right">
                <div className='right-container'>
                    <div className='hello'>
                        <p style={{fontSize: '2rem'}}>
                            { message.hello } 
                            <span id='name'>{ name }!</span>
                        </p>
                    </div>
                    <Typewriter text={message.message} delay={50} styles={typeWriterStyles} workDomains={message.whatIDo}/>
                </div>
            </div>
        </div>
    );
}

const typeWriterStyles = {
    fontWeight: '300',
    fontSize: '1.6rem',
    top: 0
}

export default About;