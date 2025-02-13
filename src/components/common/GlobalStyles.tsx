// emotion
import { Global, css } from "@emotion/react";

export default function GlobalStyles() {
    return (
        <Global
            styles={css`
                @font-face {
                    font-family: 'IBMPlexSansKR-Regular';
                    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
                    font-display: auto;
                    font-weight: normal;
                    font-style: normal;
                }

                *, ::after, ::before {
                    box-sizing: border-box;
                }
                html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
                    margin: 0;
                    padding: 0;
                    border: 0;
                    vertical-align: baseline;
                }
                body {
                    font-family: "IBMPlexSansKR-Regular", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
                    -moz-osx-font-smoothing: grayscale;
                    -webkit-font-smoothing: antialiased;
                    word-wrap: break-word;
                    color: var(--black);
                    background-color: var(--white);
                    letter-spacing: 0.04em;
                }
                html, body, #root {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: 100%;
                }
                div {
                    width: 100%;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
                h1 {
                    font-size: var(--font-size-h1);
                    font-weight: var(--font-weight-semibold);
                    margin: 16px 0px;
                }
                h2 {
                    font-size: var(--font-size-h2);
                    font-weight: var(--font-weight-semibold);
                    margin: 10px 0px;
                }
                h3 {
                    font-size: var(--font-size-h3);
                    font-weight: var(--font-weight-medium);
                }
                h4 {
                    font-size: var(--font-size-h4);
                    font-weight: var(--font-weight-medium);
                }
                h5 {
                    font-size: var(--font-size-h5);
                    font-weight: var(--font-weight-medium);
                }
                h6 {
                    font-size: var(--font-size-h6);
                    font-weight: var(--font-weight-medium);
                }
                p {
                    font-size: var(--font-size-p);
                    font-weight: var(--font-weight-medium);
                    line-height: 1.6;
                    padding: 10px 0px;
                }
                
                :root {
                    --font-size-h1: 24px;
                    --font-size-h2: 22px;
                    --font-size-h3: 20px;
                    --font-size-h4: 18px;
                    --font-size-h5: 17px;
                    --font-size-h6: 16px;
                    --font-size-p: 16.8px;
                    --font-size-large: 15.8px;
                    --font-size-medium: 14.8px;
                    --font-size-small: 14px;

                    --font-weight-normal: 400;
                    --font-weight-medium: 500;
                    --font-weight-semibold: 600;
                    --font-weight-bold: 700;

                    --border-radius-none: 0px;
                    --border-radius-xs: 2px;
                    --border-radius-sm: 4px;
                    --border-radius-md: 8px;
                    --border-radius-lg: 16px;
                    --border-radius-xl: 24px;
                    --border-radius-full: 9999px;

                    --header-size: 60px;
                    --container-size: 800px;

                    --z-index-header: 1100;

                    --nav-background-color: rgba(248, 248, 248, .75);
                    --footer-border: var(--white200);

                    --white: #F8F8F8;
                    --white100: #F2F1F1;
                    --white200: #F3F4F6;
                    --white300: #E4E4E7;
                    --white400: #E5E7EB;
                    --black: #111314;
                    --grey: #4B5563;
                    --grey100: #475569;
                    --pink: #ff7171;
                }
            `}
        />
    )
}