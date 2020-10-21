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
            console.log(JSON.stringify(allSlides.data[0]));
            setData(allSlides.data);
        } 
        fetchSlides();
    },[])
    return(
        <div>
            {data && data[0] ? <Example data={data[0]} /> : <p>Nothing</p>}
            {data && data[1] ? <Example data={data[1]} /> : <p>Nothing</p>}
            
        </div>
    )
}

export default SlideShow