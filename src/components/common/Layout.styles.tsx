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