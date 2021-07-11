import React , {useState} from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';

export default function ReservedCircleButton (){

    const [isReserved, setIsReserved] = useState(false)

    function handleClick(){
        setIsReserved(!isReserved);
    }

    return(
        <Fab style={{background: "#FCDDEC", color:isReserved ? "#4E962C" :"#000", width:"36px", height:"36px"}} onClick={handleClick}>
            {isReserved ?  <FavoriteIcon/> : <FavoriteBorderIcon/>}
        </Fab>
    )
}