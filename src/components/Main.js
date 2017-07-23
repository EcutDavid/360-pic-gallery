import React from 'react';

import 'styles/main.scss';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';

class AppComponent extends React.Component {
  componentDidMount() {
    const entries = document.querySelectorAll('a-plane');
    const entryCount = entries.length;
    const sky = document.querySelector('a-sky');
    
    for (let index = 0; index < entryCount; index++) {
      let element = entries[index];
      element.addEventListener('click', () => {
        sky.setAttribute('src', `#img${index + 1}`);
      });
    }
  }

  render() {
    return (
      <a-scene vr-mode-ui="enabled: false">
        <a-assets>
          <img id="img1" src={img1} />
          <img id="img2" src={img2} />
          <img id="img3" src={img3} />
        </a-assets>
        <a-plane src='#img1' color='grey' opacity='0.8' position='0 1.7 -3'>
          <a-animation attribute='scale' begin='mouseenter' to='1.3 1.3 1' dur='300' />
          <a-animation attribute='scale' begin='mouseleave' to='1 1 1' dur='300' />
        </a-plane>
        <a-plane src='#img2' color='grey' opacity='0.8' position='0 0 -3'>
          <a-animation attribute='scale' begin='mouseenter' to='1.3 1.3 1' dur='300'  />
          <a-animation attribute='scale' begin='mouseleave' to='1 1 1' dur='300'  />
        </a-plane>
        
        <a-plane src='#img3' color='grey' opacity='0.8' position='0 -1.7 -3'>
          <a-animation attribute='scale' begin='mouseenter' to='1.3 1.3 1' dur='300'  />
          <a-animation attribute='scale' begin='mouseleave' to='1 1 1' dur='300'  />
        </a-plane>
        <a-sky radius={100} src='#img2' />
        <a-entity camera look-controls mouse-cursor />
      </a-scene>
    );
  }
}

export default AppComponent;
