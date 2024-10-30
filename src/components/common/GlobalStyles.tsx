// emotion
import { Global, css } from "@emotion/react";
// constants
import { mediaQuery } from "@constants/mediaQuery";

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
;
                }
                h1 {
                    font-size: var(--font-size-h1);
                    letter-spacing: 0.06em;
                    line-height: var(--font-line-height-lg);
                    ${mediaQuery.tablet} {
                        font-size: var(--font-size-h2);
                        line-height: var(--font-line-height-md);
                    }
                    ${mediaQuery.mobile} {
                        font-size: var(--font-size-h3);
                        line-height: var(--font-line-height-sm);
                    }
                }
                h2 {
                    font-size: var(--font-size-h2);
                }
                h3 {
                    font-size: var(--font-size-h3);
                }
                h4 {
                    font-size: var(--font-size-h4);
                }
                h5 {
                    font-size: var(--font-size-h5);
                }
                h6 {
                    font-size: var(--font-size-h6);
                    letter-spacing: 0.03em;
                    line-height: var(--font-line-height-xl);
                }
                p {
                    font-size: 16.8px;
                    padding: 10px 0px;
                    letter-spacing: 0.05em;
                    line-height: 160%;
                }
                :root {
                    // font
                    --font-size-h1: 40px;
                    --font-size-h2: 48px;
                    --font-size-h3: 36px;
                    --font-size-h4: 32px;
                    --font-size-h5: 24px;
                    --font-size-h6: 20px;
                    --font-size-p: 16px;
                    --font-size-small: 14px;
                    
                    --font-weight-normal: 400;
                    --font-weight-medium: 500;
                    --font-weight-semibold: 600;
                    --font-weight-bold: 700;

                    --font-line-height-xs: 100%;
                    --font-line-height-sm: 123%;
                    --font-line-height-md: 128%;
                    --font-line-height-lg: 123%;
                    --font-line-height-xl: 133%;
                    // z-index
                    --z-index-0: 0;
                    --z-index-header: 1100;
                }
            `}
        />
    )
}