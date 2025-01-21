// emotion
import styled from "@emotion/styled";
// constants
import { mediaQuery } from "@/constants/mediaQuery";

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
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: var(--container-size);
    height: var(--header-size);
    margin: 0 auto;
    padding: 0px 20px;
    ${mediaQuery.laptop} {
        padding: 0px;
    }
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
    font-size: var(--font-size-p);
    font-weight: var(--font-weight-normal);
    padding: 10px 2px;
`;