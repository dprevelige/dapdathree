import {
    div, a, span, img, video, source, button,
    h1,
  } from '../../scripts/dom-helpers.js';
  import { readBlockConfig } from '../../scripts/aem.js';

export default function decorate(block) {
    console.log("cta", block);

    const properties = readBlockConfig(block);
    const rteElementTag = Array.from(block.querySelectorAll('p'))
    .find((el) => el.textContent.trim() === 'buttontext');
    const rteElement = rteElementTag?.parentElement?.nextElementSibling;
    const rteContent = rteElement?.querySelector('p')?.innerHTML;
    console.log("rteContent", rteContent);
    console.log("properties", properties);
    const cta = div({ class: 'cta-container' },
        div({ class: 'cta-wrapper' },
          div({ class: 'cta-image' },
            img({ src: properties.image, alt: properties.alt }),
          ),
          div({ class: 'cta-text' }, (properties['keyhere']) ? properties['keyhere'] : ''),
          div({ class: 'cta-button' },
            div({ class: 'button-container' },
                a({ id: 'button', href: '#', class: `button dark-bg` },
                  span({ class: 'button-text' }, rteContent),
                ),
              ),
          ),
        ),
      );
      block.innerHTML = '';
      block.appendChild(cta);
}