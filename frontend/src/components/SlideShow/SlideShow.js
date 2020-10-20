import React,  { useEffect } from 'react'
import { makeStyles } from "@material-ui/styles";
import axios from 'axios'

const useStyles = makeStyles(theme => ({

}));
function SlideShow(){
    const classes = useStyles();
    useEffect(()=>{
        async function fetchSlides(){
            const allSlides = await axios({
                method: 'get',
                url: `/slides`
            });
            console.log(JSON.stringify(allSlides));
        } 
        fetchSlides();
    },[])
    return(
        <div>
            SlideShow
        </div>
    )
}

export default SlideShow