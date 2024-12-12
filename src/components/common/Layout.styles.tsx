// emotion
import styled from "@emotion/styled";

export const Navbar = styled.nav`
    position: fixed;
    width: 100%;
    top: 0;
    background-color: rgba(248, 248, 248, .75);
    backdrop-filter: blur(4px);
    z-index: var(--z-index-header);
`;

export const NavContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 16px 24px;
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
    text-decoration: none;
    list-style-type: none;
`;

export const NavLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: var(--font-size-p);
    font-weight: var(--font-weight-medium);
    line-height: 160%;
    padding: 10px 0px;
`;

export const Main = styled.main`
    margin-top: 80px;
`;

export const Footer = styled.footer`
    width: 100%;
    height: 100%;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    padding: 30px 0px;
    border-top: 1px solid #E4E4E7;
    text-align: center;
`;

export const Copyright = styled.p`
    font-size: 14.8px;
`;