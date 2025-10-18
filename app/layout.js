export const metadata = {
  title: "Zestara",
  description: "Zestara → Next.js port (pixel-perfect)",
};

import Script from "next/script";
import Footer from "./components/shared/Footer";
import "./style.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-wf-domain="zestara-template.webflow.io"
      data-wf-page="67a1a751729a973ff35d3388"
      data-wf-site="67a1a751729a973ff35d337a"
      data-wf-status="1"
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        {/* Webflow flags for CSS states */}
        <Script id="w-mod-js" strategy="beforeInteractive">{`
          !function(o,c){var n=c.documentElement,t=" w-mod-";
          n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}
          (window,document);
        `}</Script>

        {/* WebFont loader + families (matches OG: Inter + Raleway) */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          strategy="beforeInteractive"
        />
        <Script id="webfont-load" strategy="beforeInteractive">{`
          WebFont.load({ google: { families: ["Inter:100,200,300,regular,500,600,700,800,900","Raleway:regular,800"] } });
        `}</Script>
        <noscript>
          <style>{`[data-w-id]{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <link
          rel="stylesheet"
          href="https://unpkg.com/photoswipe@5/dist/photoswipe.css"
        />
      </head>
      <body>
        {children}
        <Footer />
        {/* (Optional) jQuery if needed by any legacy snippets */}
        <Script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          strategy="afterInteractive"
        />

        {/* Minimal shim so the mobile menu opens/closes exactly on small screens.
           Webflow normally does this via its runtime; this mirrors the behavior. */}
        <Script id="zestara-nav-toggle" strategy="afterInteractive">{`
          (function(){
            var nav     = document.querySelector('.navbar.w-nav');
            var menu    = nav && nav.querySelector('.nav-menu.w-nav-menu');
            var button  = nav && nav.querySelector('#zestara-nav-button');

            function isCollapsed(){
              // mirrors Webflow's data-collapse="medium" hiding via CSS
              return window.matchMedia('(max-width: 991px)').matches;
            }

            if (button && menu) {
              button.addEventListener('click', function(){
                var open = button.classList.toggle('w--open');
                if (open) {
                  menu.setAttribute('data-nav-menu-open','');
                  menu.style.display = 'block';
                } else {
                  menu.removeAttribute('data-nav-menu-open');
                  menu.style.display = '';
                }
              });

              // close menu on resize up
              window.addEventListener('resize', function(){
                if (!isCollapsed()) {
                  button.classList.remove('w--open');
                  menu.removeAttribute('data-nav-menu-open');
                  menu.style.display = '';
                }
              });
            }
          })();
        `}</Script>

        <Script
          src="https://unpkg.com/photoswipe@5/dist/photoswipe.umd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.umd.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
