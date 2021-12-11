import Meta from './metaTag'
import React from "react";

export default function masterPage({ preview, children }) {
    return(
        <div>
            <Meta />
            <main>{ children }</main>
        </div>
    );
}