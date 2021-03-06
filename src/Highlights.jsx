import React, {Component} from 'react';
import Divider from './Divider';
import Image from './Image';

class Highlights extends Component {
  render() {
    const corkURL = "https://trickstats-gifs.s3.us-east-2.amazonaws.com/cork.gif";
    const aerialRaizURL ="https://trickstats-gifs.s3.us-east-2.amazonaws.com/aerial_ct_raiz.gif";

    return (
			<div className="Highlights" id="Highlights">
        <div className="section">
          <h1>Highlights</h1>
          <Divider size={3}/>
          <div className="content">
            In total, 15 questions were asked. Some key highlights are:
            <ul>
              <li> The most popular trick was <span className="highlight"> Cork </span></li>
              <li> Although combo's weren't asked for, the most mentioned combo was <span className="highlight"> 
                Aerial -> front swing -> Raiz</span></li>
							<Image alt="cork" url={corkURL} size="medium"/>
              <Image alt="aerial_raiz" url={aerialRaizURL} size="medium"/>
              <li> Most of the respondents train between <span className="highlight">4-6 hours</span> a week </li>
              <li> Approximately <span className="highlight">60%</span> of the respondents have been tricking 
                  between <span className="highlight">1 and 5 years</span> </li>
              <li> <span className="highlight">116/365</span> said they discovered tricking through the internet </li>
              <li> More trickers claimed to upload videos to Instagram than YouTube</li>
            </ul>
            <p> Obviously, this survey was not perfect. Along with the fact that only a small percentage of the 
              community responded, it was heavily biased against trickers who don't speak English. Hopefully, 
              future surveys can yield a larger sample pool and more diverse responses.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Highlights;
