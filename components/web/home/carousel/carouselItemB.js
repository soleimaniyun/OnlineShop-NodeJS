
import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { CURRENCY } from '../../../../lib/constants'
import Style from '../../../../styles/web/carouselB.module.css'
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
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imagePath} title={title} />
        <CardContent>
          <div className={Style.title}>{title}</div>
          <div className={Style.brand}>{brand} {model}</div>
          <div className={Style.status}>
            <div>ارسال رایگان</div>
            <LocalShippingIcon fontSize="small" color="disabled"/>
            <div>بهمراه کارت هدیه</div>
            <CardGiftcardIcon fontSize="small"  color="secondary"/>
          </div>
          <div className={Style.discount}>
            {/*<Chip label={discount} color="secondary" icon={<LocalOfferIcon/>} size="small" />*/}
            <span className={Style.correction}>{price.toLocaleString()}</span>
            <Chip label={discount} color="secondary" size="small" className={classes.chip} />
          </div>
          <div className={Style.discount}>
            <span>{cost.toLocaleString()}</span><span>{CURRENCY}</span>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  </a>
  );
}
