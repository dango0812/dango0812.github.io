// react
import { Outlet } from "react-router-dom";
// emotion
import { css } from "@emotion/react";
// components
import Container from "@components/common/Container";
import { ColumnFlex, RowFlex } from "@components/common/FlexBox";
import { Navbar, NavContainer, NavList, NavLink, Main, Footer, Copyright } from "@components/common/Layout.styles";
// icons
import BlogIcon from "@assets/icon/BlogIcon";
import MailIcon from "@assets/icon/MailIcon";
import GithubIcon from "@assets/icon/GithubIcon";
// constants
import { paths } from "@constants/paths";

const navConfig = [
    {
        name: "Timeline",
        href: paths.timeline
    },
    {
        name: "Projects",
        href: paths.projects
    },
    {
        name: "Posts",
        href: paths.posts
    }
];

export default function Layout() {
    return (
        <>
            <Navbar>
                <NavContainer>
                    <RowFlex
                        justifyContent="space-between"
                        gap={6}
                        css={css`
                            width: 100%;
                        `}
                    >
                        <NavLink
                            href={paths.home}
                        >
                            Donggyu Kim
                        </NavLink>
                        
                        <NavList>
                            {navConfig.map(({ name, href }) => (
                                <li
                                    key={name}
                                >
                                    <NavLink
                                        href={href}
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </NavList>

                    </RowFlex>
                </NavContainer>
            </Navbar>
            
            <Main>
                <Outlet />
            </Main>

            <Footer>
                <Container>
                    <ColumnFlex
                        alignItems="center"
                        gap={20}
                    >
                        <RowFlex
                            alignItems="center"
                            justifyContent="center"
                        >
                            <NavList
                                css={css`
                                    align-items: center;
                                    justify-content: center;
                                    gap: 32px;
                                `}
                            >
                                {navConfig.map(({ name, href }) => (
                                    <li
                                        key={name}
                                    >
                                        <NavLink
                                            href={href}
                                        >
                                            {name}
                                        </NavLink>
                                    </li>
                                ))}
                            </NavList>
                        </RowFlex>

                        <RowFlex
                            gap={24}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <BlogIcon />
                            <GithubIcon />
                            <MailIcon />
                        </RowFlex>

                        <Copyright>
                            © 2024 Donggyu Kim, All rights reserved
                        </Copyright>
                    </ColumnFlex>
                </Container>
            </Footer>
        </>
    )
}