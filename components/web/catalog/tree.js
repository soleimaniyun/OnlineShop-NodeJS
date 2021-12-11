import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import TreeItem from '@material-ui/lab/TreeItem';
import Style from '../../../styles/web/catalog.module.css';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        height: '8vw',
        flexGrow: 1,
        maxWidth: '18vw',
    },
    item: {
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
        paddingRight: '0.6vw',
    },
    items: {
        padding: '0.3vw',
    },
    selected: {
        fontFamily: 'IRANSans',
        fontSize: '0.8vw',
        paddingRight: '0.7vw',
        fontWeight: 'bold',
    }
});

export default function FileSystemNavigator() {
    const classes = useStyles();

    return (
        <div>
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon/>}
            defaultExpandIcon={<ChevronLeftIcon/>}
        >
            <TreeItem
                nodeId="1"
                label={<div><Typography className={classes.item}>تمام محصولات</Typography></div>}
                className={Style.tree}
            >
                <TreeItem
                    nodeId="2"
                    label={<div><Typography className={classes.item}>کالای دیجیتال</Typography></div>}
                    className={classes.items}
                >

                    <TreeItem
                        nodeId="3"
                        label={<div><Typography className={classes.item}>دوربین</Typography></div>}
                        className={classes.items}
                    />
                    <TreeItem
                        nodeId="4"
                        label={<div><Typography className={classes.selected}>کامپیوتر</Typography></div>}
                        className={classes.items}
                    />
                    <TreeItem
                        nodeId="5"
                        label={<div><Typography className={classes.item}>موبایل</Typography></div>}
                        className={classes.items}
                    />

                </TreeItem>
            </TreeItem>
        </TreeView>
        </div>
    );
}