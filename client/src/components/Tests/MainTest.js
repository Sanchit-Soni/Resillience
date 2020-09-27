import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
// import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
    root:{
        // margin: "4%",
        // marginTop: "5%",
        // maxWidth:"70%",
        // maxHeight:"100%",
        padding:"20px",
    },
    paper1: {
        margin: "1%",
        marginTop: "4%",
        paddingTop:"20px",
        maxWidth:"70%",
        maxHeight:"100%",
        textAlign: "center",
        // color: "#f8f8f8"
    },
    paper2: {
        margin: "1%",
        marginTop: "2%",
        paddingTop:"0px",
        maxWidth:"70%",
        maxHeight:"100%",
        textAlign: "center",
        marginBottom:"-10%"
    },
    top:{

    },
    box: {
        padding:"10px",
    },
    question: {
        height: "100%",
        width:"100%",
        marginTop:"2%",
        alignItems: "center"
    },   
    optionContainer :{
        width: "100%"
    },
    option :{
        width: "100%"
    },
    buttonContainer:{
        padding:"20px"
    },
    Button:{
        paddingLeft:"5px",
        paddingRight:"5px",
        
    }
}));

export default function MainTest() {
    
        const  classes = useStyles();
        return(
            <Fragment>
                <Helmet><title>Test</title></Helmet>
                <div className={classes.root}>
                <Paper elevation={5} className={classes.paper1}>
                    <div className={classes.box}>
                        <p className={classes.top}>
                            <span style={{float:"left"}}>1 of 20 questions</span>
                            <span><h4>Sample Test 3</h4></span>
                            {/* <span style={{float:"right"}}><AccessTimeIcon />1:15:19</span> */}
                        </p>
                        <div className={classes.question} >
                            <img alt="question" src="https://res.cloudinary.com/rweb1/image/upload/v1601136030/iukekz1lf7truo7huhtw.png" />
                        </div>
                        <div className={classes.optionContainer}>
                            <p className={classes.option} > Option A </p>
                            <p className={classes.option} > Option B </p>
                        </div> 
                        <div className={classes.optionContainer}>
                            <p className={classes.option} > Option C </p>
                            <p className={classes.option} > Option D </p>
                        </div> 
                    </div>
                </Paper>
                <Paper elevation={5} className={classes.paper2}>
                    <div className={classes.buttonContainer}>
                        <Button
                            variant="contained"
                            color="	#FF0000"
                            className={classes.button}
                        >
                            End Test
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Previous Question
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Mark for Review
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Next Question
                        </Button>
                    </div>
                </Paper>
                </div>
            </Fragment>
        );
    
}