/*! <ddg-credit> · Deschutes Design Group site credit · deschutesdesigngroup.com */
(() => {
  if (customElements.get('ddg-credit')) return;

  const HOME = 'https://deschutesdesigngroup.com';

  // Accent used for the sun, the river and the underline sweep. A light and a dark
  // variant are chosen automatically from the footer's background unless `accent` is set.
  const ACCENT_ON_DARK = '#5cc8b4';
  const ACCENT_ON_LIGHT = '#0f7a6c';

  const css = `
    :host {
      --ddg-accent: ${ACCENT_ON_DARK};
      --ddg-rest: .62;
      display: inline-flex;
      color: inherit;
      font: 500 11px/1 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      letter-spacing: .16em;
      text-transform: uppercase;
      -webkit-font-smoothing: antialiased;
    }
    :host([hidden]) { display: none; }
    :host([variant="bar"]) {
      display: flex;
      justify-content: center;
      padding: 18px 16px;
      border-top: 1px solid color-mix(in srgb, currentColor 12%, transparent);
    }
    :host([align="start"]) { justify-content: flex-start; }
    :host([align="end"]) { justify-content: flex-end; }

    a {
      display: inline-flex;
      align-items: center;
      gap: .7em;
      color: inherit;
      text-decoration: none;
      opacity: var(--ddg-rest);
      transition: opacity .3s ease;
      border-radius: 4px;
      outline-offset: 4px;
    }
    a:hover, a:focus-visible { opacity: 1; }
    a:focus-visible { outline: 1px solid var(--ddg-accent); }

    svg { width: 20px; height: 20px; flex: none; overflow: visible; }
    .ridge, .wave { fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
    .ridge { stroke-dasharray: 26; stroke-dashoffset: 0; }
    .wave { stroke: var(--ddg-accent); opacity: .9; }
    .sun { fill: var(--ddg-accent); transform-origin: 15.5px 3.5px; transition: transform .4s cubic-bezier(.3,1.6,.5,1); }
    .flow { animation: flow 2.4s linear infinite; animation-play-state: paused; }
    a:hover .flow, a:focus-visible .flow { animation-play-state: running; }
    a:hover .sun, a:focus-visible .sun { transform: scale(1.5); }

    :host([data-reveal]) .ridge { animation: draw 1.1s cubic-bezier(.6,0,.2,1) both; }
    :host([data-reveal]) .sun { animation: rise .6s .7s cubic-bezier(.3,1.6,.5,1) both; }

    .by { opacity: .75; }
    .name { position: relative; white-space: nowrap; }
    .name::after {
      content: "";
      position: absolute; left: 0; right: 0; bottom: -5px; height: 1px;
      background: var(--ddg-accent);
      transform: scaleX(0); transform-origin: left;
      transition: transform .45s cubic-bezier(.6,0,.2,1);
    }
    a:hover .name::after, a:focus-visible .name::after { transform: scaleX(1); }
    .arrow { display: inline-block; transition: transform .3s ease; }
    a:hover .arrow, a:focus-visible .arrow { transform: translate(2px, -2px); }

    @keyframes flow { to { transform: translateX(-4px); } }
    @keyframes draw { from { stroke-dashoffset: 26; } }
    @keyframes rise { from { transform: translateY(6px) scale(0); } }

    @media (max-width: 420px) { .by { display: none; } }
    @media (prefers-reduced-motion: reduce) {
      *, *::after { animation: none !important; transition: none !important; }
    }
  `;

  // Cascade Range over the Deschutes: a ridge line, the sun, and a river that flows on hover.
  const mark = `
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <defs><clipPath id="c"><rect x="1" y="12" width="18" height="8"/></clipPath></defs>
      <path class="ridge" d="M2 13 7 6.5l3 3.5 3.5-5L18 13"/>
      <circle class="sun" cx="15.5" cy="3.5" r="1.3"/>
      <g clip-path="url(#c)"><path class="wave flow" d="M-2 16.5q1-1.2 2 0t2 0 2 0 2 0 2 0 2 0 2 0 2 0 2 0 2 0 2 0 2 0 2 0"/></g>
    </svg>`;

  const luminance = (rgb) => {
    const [r, g, b] = rgb.match(/[\d.]+/g).slice(0, 3).map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  // Walk up to the first ancestor with a painted background.
  const backgroundOf = (el) => {
    for (let n = el; n && n.nodeType === 1; n = n.parentElement || n.getRootNode().host) {
      const bg = getComputedStyle(n).backgroundColor;
      const alpha = bg.match(/[\d.]+/g)?.[3];
      if (bg && bg !== 'transparent' && alpha !== '0') return bg;
    }
    return 'rgb(255, 255, 255)';
  };

  class DdgCredit extends HTMLElement {
    static observedAttributes = ['accent', 'label'];

    connectedCallback() {
      if (!this.shadowRoot) {
        this.attachShadow({ mode: 'open' });
        this.render();
        this.reveal();
      }
      this.applyAccent();
    }

    attributeChangedCallback() {
      if (this.shadowRoot) {
        this.render();
        this.applyAccent();
      }
    }

    render() {
      const label = this.getAttribute('label') ?? 'Site by';
      const url = new URL(HOME);
      url.searchParams.set('utm_source', location.hostname);
      url.searchParams.set('utm_medium', 'site-credit');

      this.shadowRoot.innerHTML = `
        <style>${css}</style>
        <a href="${url}" target="_blank" rel="noopener">
          ${mark}
          <span><span class="by"></span> <span class="name">Deschutes Design Group</span></span>
          <span class="arrow" aria-hidden="true">&#8599;</span>
        </a>`;
      this.shadowRoot.querySelector('.by').textContent = label;
      this.shadowRoot.querySelector('a').setAttribute('aria-label', `${label} Deschutes Design Group (opens in a new tab)`);
    }

    applyAccent() {
      const accent = this.getAttribute('accent');
      const onDark = luminance(backgroundOf(this)) < 0.4;
      this.style.setProperty('--ddg-accent', accent || (onDark ? ACCENT_ON_DARK : ACCENT_ON_LIGHT));
    }

    // Draw the ridge once when the credit first scrolls into view, so touch
    // visitors who never hover still see the motion.
    reveal() {
      if (!('IntersectionObserver' in window)) return;
      const io = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        this.setAttribute('data-reveal', '');
        io.disconnect();
      }, { threshold: 1 });
      io.observe(this);
    }
  }

  customElements.define('ddg-credit', DdgCredit);
})();
