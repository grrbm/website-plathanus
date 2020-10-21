import React,  { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/styles";
import axios from 'axios'

const useStyles = makeStyles(theme => ({

}));
function SlideShow(){
    const classes = useStyles();
    const [data,setData] = useState();
    const Example = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} />
    useEffect(()=>{
        async function fetchSlides(){
            const allSlides = await axios({
                method: 'get',
                url: `/slides`
            });
            console.log(JSON.stringify(allSlides.data));
            setData(allSlides.data);
        } 
        fetchSlides();
    },[])
    return(
        <div>
            {data ? <Example data={data} /> : <p>Nothing</p>}
            
        </div>
    )
}

export default SlideShow