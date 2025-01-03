// emotion
import { Global, css } from "@emotion/react";

export default function GlobalStyles() {
    return (
        <Global
            styles={css`
                @font-face {
                    font-family: 'IBMPlexSansKR-Regular';
                    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
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
                    line-height: var(--font-line-height-default);
                    font-family: "IBMPlexSansKR-Regular", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
                    -moz-osx-font-smoothing: grayscale;
                    -webkit-font-smoothing: antialiased;
                    word-break: keep-all;
                    word-wrap: break-word;
                    color: #111314;
                    background-color: #F8F8F8;
                    letter-spacing: 0.04em;
                }
                div, article {
                    width: 100%;
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
                p {
                    font-size: var(--font-size-p);
                    font-weight: var(--font-weight-medium);
                    line-height: 160%;
                    padding: 10px 0px;
                }
                a {
                    color: inherit;
                }
                :root {
                    --font-size-h1: 24px;
                    --font-size-h2: 22px;
                    --font-size-h3: 20px;
                    --font-size-h4: 18px;
                    --font-size-p: 16.8px;

                    --font-weight-normal: 400;
                    --font-weight-medium: 500;
                    --font-weight-semibold: 600;
                    --font-weight-bold: 700;

                    --z-index-header: 1100;
                }
            `}
        />
    )
}