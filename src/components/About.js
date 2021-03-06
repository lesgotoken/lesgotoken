import React, {useRef, useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../styles/About.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    imagebreakpoint: {
        [theme.breakpoints.only("xs")]: {
            display: "none"
          },
          [theme.breakpoints.down("sm")]: {
            left: "-85px"
          },
          [theme.breakpoints.up("md")]: {
            height: "25rem !important"
          },
    }
  });

function About(props) {
    const { classes } = props;

    
    let aboutelment = useRef(null)

    useEffect(()=> {
        gsap.from(aboutelment,{
            scrollTrigger:{
                trigger: aboutelment,
                endTrigger: aboutelment,
                toggleActions: "restart pause restart pause",
                start: "top 100%",
                end: "100% 5%",
                markers: false
            },
            duration: 2,
            opacity: 0,
            y: 100,
            ease: "expo.out"
        });
    }, [])

    return (
        <div id="About" className="wrapper" style={{"position": "relative"}}>
                <div className="custom-container py-7" ref={el => {aboutelment = el}}>
                    <Grid container spacing={40}>
                        <Grid item xs={12} sm={6} style={{ "display" : "flex", "align-self": "center", "justifyContent" : "start" }} >
                            <img src="../images/3.png" alt="nft" style={{ "position" : "absolute", "width" : "auto", "height" : "25rem", "bottom" : "0" }} className={classes.imagebreakpoint}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h3" className={classes.grow} >
                                ABOUT US
                            </Typography>
                            <div style={{ "margin-top": "1rem", "text-transform": "uppercase" }}><Typography variant="body1" className={classes.grow}>
                                We are a group of software and game developers that decided to create a special NFT for the best community, "Cosmoboy". Get it now to join the Cosmoboy and get access to our upcoming BIG Community.
                            </Typography></div>
                        </Grid>
                    </Grid>
                </div>
            </div>
    )
}

export default withStyles(styles)(About)
