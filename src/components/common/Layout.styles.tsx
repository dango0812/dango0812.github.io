// emotion
import styled from "@emotion/styled";

export const Navbar = styled.nav`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--nav-background-color);
    backdrop-filter: blur(4px);
    z-index: var(--z-index-header);
`;

export const NavContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    max-width: var(--container-size);
    margin: 0 auto;
    padding: 16px 24px;
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
    list-style-type: none;
`;

export const NavLink = styled.a`
    display: flex;
    align-items: center;
    color: inherit;
    font-size: var(--font-size-p);
    font-weight: var(--font-weight-medium);
    line-height: 1.6;
    padding: 10px 0px;
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
`;

export const ContentWrapper = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
`;

export const Footer = styled.footer`
    margin-top: 20px;
    padding: 20px 0px 40px 0px;
    border-top: 1px solid var(--footer-border);
    text-align: center;
`;

export const Copyright = styled.p`
    padding: 0px;
    font-size: var(--font-size-small-p);
`;