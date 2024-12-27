import React from 'react';
import { ENGLISH, ESPANOL, FRANCAIS } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const landingPageJSX = {
  [ENGLISH]:
    <div>
      <p>This website is used to display spoken texts in Gawarbati. The texts are partly annotated for information structure, prosody and word order.  </p>
      <p>Contact Anastasia Panova (anastasia.b.panova@gmail.com) if you have any questions. </p>
      <p>The website is powered by <a href='https://github.com/BrownCLPS/LingView/' target="_blank" rel="noopener noreferrer">Lingview</a>.</p>
    </div>,
  [ESPANOL]:
    <div>

    </div>,
  [FRANCAIS]:
    <div>

    </div>,
};

export function LandingPage() {
  return <TranslatableText dictionary={landingPageJSX} />;
}
