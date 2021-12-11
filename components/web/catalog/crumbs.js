import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/HomeTwoTone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Style from '../../../styles/web/catalog.module.css';
import NoSsr from "@material-ui/core/NoSsr";

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        padding: '0.3vw',
        color: theme.palette.grey[800],
        fontWeight: '0.8vw',
        fontFamily: 'IRANSans',
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip);

function handleClick(event) {
    event.preventDefault();
    console.info('Click Action...');
}

export default function Crumbs() {
    return (
        <Breadcrumbs aria-label="breadcrumb" className={Style.crumbs} >

            <StyledBreadcrumb
                component="a"
                href="#"
                label="صفحه نخست"
                icon={<HomeIcon style={{ fontSize: '1.1vw', margin: '0vw' }} />}
                onClick={handleClick}
            />

            <StyledBreadcrumb
                component="a"
                href="#"
                label="گروه محصولات"
                onClick={handleClick}
            />

            <StyledBreadcrumb
                label="لوازم دجیتال"
                deleteIcon={<ExpandMoreIcon />}
                onClick={handleClick}
                onDelete={handleClick}
            />

        </Breadcrumbs>
    );
}