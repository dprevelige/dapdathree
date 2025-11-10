import {
    div, a, span, img, video, source, button,
    h1,
  } from '../../scripts/dom-helpers.js';
  import { readBlockConfig } from '../../scripts/aem.js';

export default function decorate(block) {
    console.log("block", block);

    const properties = readBlockConfig(block);
    console.log("properties", properties);
    const cta = div({ class: 'cta-container' },
        div({ class: 'cta-wrapper' },
          div({ class: 'cta-image' },
            img({ src: properties.image, alt: properties.alt }),
          ),
          div({ class: 'cta-text' }, (properties['ctatext']) ? properties['ctatext'] : ''),
          div({ class: 'cta-button' },
            div({ class: 'button-container' },
                a({ id: 'button', href: '#', class: `button dark-bg` },
                  span({ class: 'button-text' }, (properties['buttontext']) ? properties['buttontext'] : ''),
                ),
              ),
          ),
        ),
      );
      console.log("cta", cta);
      block.innerHTML = '';
      block.appendChild(cta);
}