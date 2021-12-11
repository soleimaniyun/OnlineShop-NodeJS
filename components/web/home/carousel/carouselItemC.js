
import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { CURRENCY } from '../../../../lib/constants'
import Style from '../../../../styles/web/carouselB.module.css'
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  card: {
    margin: "0 20px"
  },
  media: {
    height: '12vw'
  },
  chip: {
    fontFamily: 'IRANSans',
    marginRight: '0.5vw'
  },
  button: {
    fontFamily: 'IRANSans',
    justifyContent: 'center',
  },
  action: {
    justifyContent: 'center'
  }
});

export default function MediaCard(props) {
  const { imagePath, title, brand, model, discount, price, cost, isMoving } = props;
  const classes = useStyles()

  return (
    <a onClick={(e) => {
        if(isMoving) {
          e.preventDefault();
        }
      }} href='https://w3js.com' target="_blank">
    <Card className={classes.card} elevation={0}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imagePath} title={title} />
        <CardContent>
          <div className={Style.title}>{title}</div>
          <div className={Style.brand}>{brand} {model}</div>
{/*
          <div className={Style.status}>
            <LocalShippingIcon fontSize="small" color="disabled"/>
            <CardGiftcardIcon fontSize="small"  color="secondary"/>
          </div>
          <div className={Style.discount}>
            <Chip label={discount} color="secondary" icon={<LocalOfferIcon/>} size="small" />
            <span className={Style.correction}>{price.toLocaleString()}</span>
            <Chip label={discount} color="secondary" size="small" className={classes.chip} />
          </div>
*/}
          <div className={Style.discount}>
            <span>{cost.toLocaleString()}</span><span>{CURRENCY}</span>
          </div>
        </CardContent>
{/*
      <CardActions className={classes.action}>
        <Button size="small" color="primary" variant="contained" className={classes.button} startIcon={<AddShoppingCartIcon/>}>
          افزودن به سبد
        </Button>
      </CardActions>
      <CardActions className={classes.action}>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon size="small" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
*/}
      </CardActionArea>
    </Card>
  </a>
  );
}

