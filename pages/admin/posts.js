/*eslint-disable*/
import React from "react";
// layout for this page
import Admin from "layouts/Admin.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-dashboard/views/iconsStyle.js";

function Posts() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    return (
        <>

        </>
    );
}

Posts.layout = Admin;

export default Posts;