import React from 'react';
// import ReactDOM from 'react-dom/client';
import { styled } from '@mui/material/styles';
import {Card, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';



// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345
//     },
//     media: {
//       height: "100px"
//     }
//   });


function ProfilePage() {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    // const classes = useStyles()
  
    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    return(
        <Card className={classes.root}>
            <input 
                type='file' 
                accept='image/*' 
                onChange={handleImageUpload}
                ref={imageUploader}
                multiple='false' 
                style={{
                    display: 'none'
                }}/>
                onClick={() => imageUploader.current.click()}
            <CardMedia
                className={classes.media}
                image={uploadedImage}
                title="Profile image for user"
            />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                CardMedia Example
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                The CardMedia component sets a background image to cover available
                space.
            </Typography>
        </CardContent>
        </Card>
    )
}


export default ProfilePage;