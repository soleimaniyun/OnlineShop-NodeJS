import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Collapse from '@material-ui/core/Collapse';
import { useSpring, animated } from 'react-spring/web.cjs';
import CropSquareRoundedIcon from '@material-ui/icons/CropSquareRounded';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import StopTwoToneIcon from '@material-ui/icons/StopTwoTone';

function TransitionComponent(props) {
    const style = useSpring({
        from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
    });

    return (
        <animated.div style={style}>
            <Collapse {...props} />
        </animated.div>
    );
}

TransitionComponent.propTypes = {
    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes.bool,
};

const StyledTreeItem = withStyles((theme) => ({
    iconContainer: {
        '& .close': {
            opacity: 0.3,
        },
    },
    group: {
        marginLeft: 7,
        paddingLeft: 18,
        borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
    },
}))((props) => <TreeItem {...props} TransitionComponent={TransitionComponent} />);

const useStyles = makeStyles({
    root: {
        height: 264,
        flexGrow: 1,
        maxWidth: 400,
    },
});

export default function Groups() {
    const classes = useStyles();

    return (
        <TreeView

            className={classes.root}
            defaultExpanded={['1']}
            defaultCollapseIcon={<IndeterminateCheckBoxOutlinedIcon />}
            defaultExpandIcon={<AddBoxOutlinedIcon />}
            defaultEndIcon={<StopTwoToneIcon />}
        >

            <StyledTreeItem nodeId="1" label="گروه اصلی">
                <StyledTreeItem nodeId="2" label="پوشاک" />
                <StyledTreeItem nodeId="3" label="لوازم دیجیتال">
                    <StyledTreeItem nodeId="6" label="موبایل" />
                    <StyledTreeItem nodeId="7" label="کامپیوتر">
                        <StyledTreeItem nodeId="9" label="مادربرد" />
                        <StyledTreeItem nodeId="10" label="سی پی یو" />
                        <StyledTreeItem nodeId="11" label="رام" />
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="8" label="دوربین" />
                </StyledTreeItem>
                <StyledTreeItem nodeId="4" label="لوازم خانگی" />
                <StyledTreeItem nodeId="5" label="ابزار و یراق" />
            </StyledTreeItem>

            <StyledTreeItem nodeId="12" label="گروه اصلی">
                <StyledTreeItem nodeId="13" label="پوشاک" />
                <StyledTreeItem nodeId="14" label="لوازم دیجیتال">
                    <StyledTreeItem nodeId="17" label="موبایل" />
                    <StyledTreeItem nodeId="18" label="کامپیوتر">
                        <StyledTreeItem nodeId="20" label="مادربرد" />
                        <StyledTreeItem nodeId="21" label="سی پی یو" />
                        <StyledTreeItem nodeId="22" label="رام" />
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="19" label="دوربین" />
                </StyledTreeItem>
                <StyledTreeItem nodeId="15" label="لوازم خانگی" />
                <StyledTreeItem nodeId="16" label="ابزار و یراق" />
            </StyledTreeItem>

        </TreeView>
    );
}
