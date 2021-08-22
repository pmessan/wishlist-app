// import React, { useState } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

// export default function ReservedButtonCircle() {
//   const [isReserved, setIsReserved] = useState(false);

//   function handleClick() {
//     setIsReserved(!isReserved);
//   }

//   return (
//     <Fab
//       style={{
//         background: '#FCDDEC', color: isReserved ? '#4E962C' : '#000',
//         width: '36px', height: '36px',
//       }}
//       onClick={handleClick}
//     >
//       {isReserved ? <FavoriteIcon /> : <FavoriteBorderIcon />}
//     </Fab>
//   );
// }

export default function ReserveButtonExtended({
  buttonText, color, onClick, filled, disabled,
}) {
  // const [isReserved, setIsReserved] = useState(false);

  // function handleClick() {
  //   setIsReserved(!isReserved);
  // }

  const classes = useStyles();
  return (
    disabled ? (
      <Fab variant="extended" style={{ background: '#999999', color: '#fff', height: '36px' }} disabled>
        <FavoriteIcon className={classes.extendedIcon} />
        Reserved
      </Fab>
    ) : (
      <Fab variant="extended" style={{ background: color, color: '#fff', height: '36px' }} onClick={onClick}>
        {filled
          ? <FavoriteIcon className={classes.extendedIcon} />
          : <FavoriteBorderIcon className={classes.extendedIcon} />}
        {buttonText}
      </Fab>
    )
  );

  // return (
  // isReserved
  //   ? (
  //     <Fab variant="extended"
  // style={{ background: '#ff1694', color: '#fff', height: '36px' }} onClick={handleClick}>
  //       <FavoriteIcon className={classes.extendedIcon} />
  //       Reserved
  //     </Fab>
  //   )
  //   : (
  //     <Fab variant="extended"
  // style={{ background: '#4E962C', color: '#fff', height: '36px' }} onClick={handleClick}>
  //       <FavoriteBorderIcon className={classes.extendedIcon} />
  //       Reserve
  //     </Fab>
  //   )

  // );
}

// export { ReserveButtonExtended };
