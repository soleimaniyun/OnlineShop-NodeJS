import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/FavoriteTwoTone';
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from '@material-ui/icons/ShareTwoTone';
import GradeIcon from '@material-ui/icons/Grade';

const useStyles = makeStyles({
    root: {
        width: '19vw',
        borderRadius: '0',
    },
    media: {
        height: '10vw',
    },
    text: {
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
    },
    button: {
        fontFamily: 'AnjomanFaNum-Medium',
    },
});

export default function Item(props) {

    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.data.imagePath}
                    // title={props.data.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                        {props.data.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                        {props.data.brand}
                        ,
                        {props.data.model}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                        {props.data.price}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
                        {props.data.discount}
                    </Typography>

                    <GradeIcon/>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <ShareIcon/>
                </IconButton>
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <FavoriteIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}