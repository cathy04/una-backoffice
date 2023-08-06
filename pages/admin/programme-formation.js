/*eslint-disable*/
import React from "react";
// layout for this page
import Admin from "layouts/Admin.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-dashboard/views/iconsStyle.js";

function ProgrammeFormation() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    return (
        <>

        </>
    );
}

ProgrammeFormation.layout = Admin;

export default ProgrammeFormation;