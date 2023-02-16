import ToggleButton from "react-bootstrap/ToggleButton";

function Player() {
  return (
    <>
      <br />
      <iframe
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen
        width='640'
        height='360'
        src='http://player-api.qa.sambatech.com/v3/embed/0cbf2f34760af1f2cc785781093932f4/fa5ca6b155a9415354b9ba895e3a79b8'
        scrolling='no'
        frameborder='0'
        allow='geolocation; microphone; camera; encrypted-media; midi'
      ></iframe>
      <ToggleButton id='tbg-btn-1'>
        PLAY
      </ToggleButton>
      <ToggleButton id='tbg-btn-2'>
        PAUSE
      </ToggleButton>
      <ToggleButton id='tbg-btn-3'>
        SEEK TO 00:20
      </ToggleButton>
      <ToggleButton id='tbg-btn-3'>
        PLAYER STATUS
      </ToggleButton>
      <ToggleButton id='tbg-btn-3'>
        VOLUME 20%
      </ToggleButton>
      <ToggleButton id='tbg-btn-3'>
        MUTE
      </ToggleButton>
      <ToggleButton id='tbg-btn-3' align='center'>
        CLEAR ALL MEDIA EVENTS
      </ToggleButton>
    </>
  );
}

export default Player;
