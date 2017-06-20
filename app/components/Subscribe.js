// !!!!!!!!!! THIS PAGE DOESN'T WORK YET !!!!!!!!!!!!

// dependencies
import React from "react";
import {Grid} from "react-bootstrap";

export default class Subscribe extends React.Component {
  render() {
    return (
      <Grid>
        <div id="mc_embed_signup">
          {/*}<!-- Begin MailChimp Signup Form -->{*/}
          <form action="//thebuttonkids.us16.list-manage.com/subscribe/post?u=57f0940d1edc21ed3f300cbd5&amp;id=9b83af8c44" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">

              <div className="mc-field-group">
                <label>
                  Email Address
                  <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
                </label>
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                <div className="response" id="mce-success-response" style={{display: "none"}}></div>
              </div>
              {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
              <div style={{position: "absolute", left: -5000 + "px"}} aria-hidden="true"><input type="text" name="b_57f0940d1edc21ed3f300cbd5_9b83af8c44" tabIndex="-1" value="" /></div>
              <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
            </div>
          </form>
          {/*<!--End mc_embed_signup-->*/}
        </div>
      </Grid>
    )
  }
}
