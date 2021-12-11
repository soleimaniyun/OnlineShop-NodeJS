import Meta from './metaTag'
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from '@material-ui/core/styles';
import React from "react";

const theme = createMuiTheme({
    props: {
        MuiTypography: {
            variantMapping: {
                h1: 'h2',
                h2: 'h2',
                h3: 'h2',
                h4: 'h2',
                h5: 'h2',
                h6: 'h2',
                subtitle1: 'h2',
                subtitle2: 'h2',
                body1: 'span',
                body2: 'span',
            },
        },
    },
});

export default function masterPage({ preview, children }) {
    return(
        <ThemeProvider theme={theme}>
        <div>
            <Meta />
            <main>{ children }</main>
        </div>
        </ThemeProvider>
    );
}