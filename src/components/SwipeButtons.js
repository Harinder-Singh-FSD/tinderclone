import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
const SwipeButtons = () => {
  return (
    <div className="swipebuttons">
      <IconButton>
        <ReplayIcon fontSize="large" className="swipe_repeat" />
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large" className="swipe_left" />
      </IconButton>
      <IconButton>
        <StarRateIcon fontSize="large" className="swipe_star" />
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize="large" className="swipe_right" />
      </IconButton>
      <IconButton>
        <FlashOnIcon fontSize="large" className="swipe_lightning" />
      </IconButton>
    </div>
  );
};
export default SwipeButtons;
