import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Parameters() {
  return (
    <>
      <br />
      <Form>
        <Button variant='outline-danger'>CARREGAR PARÂMETROS NO PLAYER</Button>
        <Form.Group className='mb-3' controlId='formGroupEmail'>
          <br />
          <Form.Label>Player-Hash:*</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Media ID:*</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <br />
        <Form.Check label='initialTime' />
        <br />
        <Form.Check label='resume' />
        <br />
        <Form.Check label='cast' />
        <br />
        <Form.Check label='volume' />
        <br />
        <Form.Check label='preload' />
        <br />
        <Form.Check label='iframeURL' />
        <br />
        <Form.Check label='enableControls' />
        <br />
        <Form.Check label='sb360' />
        <br />
        <Form.Check label='captionTheme' />
        <br />
        <Form.Check label='fsOnStart' />
        <br />
        <Form.Check label='startOutput' />
        <br />
        <Form.Check label='title' />
        <br />
        <Form.Check label='thumbnailLiveURL' />
        <br />
        <Form.Check label='thumbnailURL' />
        <br />
        <Form.Check label='thumbnailMaxQuality' />
        <br />
        <Form.Check label='hidePlayBtn' />
        <br />
        <Form.Check label='outputs' />
        <br />
        <Form.Check label='ad_program' />
        <br />
        <Form.Check label='enablePiP' />
        <br />
        <Form.Check label='enableShare' />
        <br />
        <Form.Check label='trafficEconomy' />
        <br />
        <Form.Check label='gaAccount' />
        <br />
        <Form.Check label='audio' />
        <br />
        <Form.Check label='sct' />
        <br />
        <Form.Check label='age' />
        <br />
        <Form.Check label='accessibility' />
        <br />
        <Form.Check label='cuepoints' />
        <br />
        <Form.Check label='hasTwitter' />
        <br />
        <Form.Check label='hasFacebook' />
        <br />
        <Form.Check label='hasEmbed' />
        <br />
        <Form.Check label='hasWhatsApp' />
        <br />
        <Form.Check label='hasLink' />
        <br />
        <Form.Check label='safarihtml5' />
        <br />
        <Form.Check label='enableLead' />
        <br />
        <Form.Check label='siteURL' />
        <br />
        <Form.Check label='mediaURL' />
        <br />
        <Form.Check label='type' />
        <br />
        <Form.Check label='DRM' />
        <br />
        <Form.Check label='thumbnailFit' />
        <br />
        <Form.Check label='userId' />
        <br />
        <Form.Check label='iosFullscreenAlert' />
        <br />
        <Form.Check label='disableIosFullscreen' />
        <br />
        <Form.Check label='castReceiverId' />
        <br />
        <Form.Check label='keepLastQuality' />
        <br />
        <Form.Check label='iosRequireDoubleClick' />
      </Form>
    </>
  );
}
export default Parameters;
