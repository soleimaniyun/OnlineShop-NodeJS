import * as React from "react";
import { Slide, useScrollTrigger } from "@material-ui/core";

const Hide = ({ children }) => {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

export default Hide;
