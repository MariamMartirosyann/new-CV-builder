import React from 'react';

import { Grid, Typography } from '@mui/material';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  InstapaperIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  ViberShareButton,
  ViberIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";
import "./style.css";



const ShareRezume = () => {
  const shareUrlFacebook = '../Templates/Template1';
  return (
    <div>
      <Grid container spacing={2} className="shareOnline">
        <Grid item> <FacebookShareButton url={shareUrlFacebook}>
          <FacebookIcon size={42} round={true} />
        </FacebookShareButton>
        </Grid>
        <Grid item>
        <EmailShareButton url={shareUrlFacebook}>
          <EmailIcon size={42} round={true} />
        </EmailShareButton>
        </Grid>
        <Grid item>
        < InstapaperShareButton url={shareUrlFacebook}>
          <InstapaperIcon size={42} round={true} />
        </ InstapaperShareButton>
        </Grid>
        <Grid item>
        < LinkedinShareButton url={shareUrlFacebook}>
          <LinkedinIcon size={42} round={true} />
        </ LinkedinShareButton>
        </Grid>
        <Grid item>
        < TelegramShareButton url={shareUrlFacebook}>
          <TelegramIcon size={42} round={true} />
        </ TelegramShareButton>
        </Grid>
        <Grid item>
        < ViberShareButton url={shareUrlFacebook}>
          <ViberIcon size={42} round={true} />
        </ ViberShareButton>
        </Grid>
        <Grid item>
        <  WhatsappShareButton url={shareUrlFacebook}>
          < WhatsappIcon size={42} round={true} />
        </  WhatsappShareButton>
        </Grid>
        
        
      </Grid>
      <Grid container spacing={2} className="shareOnline">
        <Typography variant='h2'>This will work in live version</Typography>
      </Grid>
    </div>
  )
}

export default ShareRezume