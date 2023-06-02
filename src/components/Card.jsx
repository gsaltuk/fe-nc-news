import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { pink } from '@mui/material/colors';


const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  media: {
    height: 300,
  },
  content: {
    flexGrow: 1,
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 'auto'
  },
  
};

export default function MediaCard(img, title, author, id, date) {
  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.media}
        image={img}
        title="green iguana"
      />
      <CardContent sx={styles.content}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Posted By {author}<br></br>
          {new Date(date).toUTCString()}
        </Typography>
      </CardContent>
      <CardActions sx={styles.actions}>
        <Link to={`/articles/${id}`}>
          <Button sx={{
            "&.MuiButton-text": { color: "#ffffff", backgroundColor: "#FD0399"},
            "&:hover": {backgroundColor: "#000000"}
          }} size="large">View more</Button>
        </Link>
      </CardActions>
    </Card>
  );
}