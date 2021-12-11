import React from 'react'
import Crumbs from './crumbs'
import Sort from './sort'
import Item from './item'
import Pagination from './paginate'

import Typography from "@material-ui/core/Typography"
import {makeStyles, withStyles} from "@material-ui/core/styles"
import Style from '../../../styles/web/catalog.module.css'
import Paper from "@material-ui/core/Paper"
import NoSsr from "@material-ui/core/NoSsr"

import { AMAZING_INFO } from '../../../lib/constants';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({

    box: {
        backgroundColor: 'white',
        padding: '0',
    },
});

const StyledTypography = withStyles((theme) => ({
    root: {
        fontFamily: 'IRANSans',
        fontSize: '0.7vw',
    }

}))(Typography);

export default function Products() {

    const list = AMAZING_INFO
    const classes = useStyles();

    return(
        <div className={Style.products} >
            <NoSsr>
            <div className={Style.panelC} >
                <Crumbs />
                <StyledTypography variant="overline" component="body2">تعداد 632 محصول</StyledTypography>
            </div>
            </NoSsr>
            <Box className={Style.panelD} >
                <Box border={1} borderColor="grey.300" className={classes.box}>
                    <Sort />
                </Box>
                <NoSsr>
                <div className={Style.panelE} >
                    {
                        list.map((info,index) => {
                            return <Item data={info} key={info.id} />
                        })
                    }
                </div>
                </NoSsr>
                <NoSsr>
                <div>
                    <Pagination />
                </div>
                </NoSsr>
            </Box>
        </div>
    )
}