// react
import { Outlet } from "react-router-dom";
// emotion
import { css } from "@emotion/react";
// components
import Container from "@components/common/Container";
import { ColumnFlex, RowFlex } from "@components/common/FlexBox";
import { Navbar, NavContainer, NavList, NavLink, ContentWrapper, Footer, Link, Copyright } from "@components/common/Layout.styles";
// icons
import BlogIcon from "@assets/icon/BlogIcon";
import MailIcon from "@assets/icon/MailIcon";
import GithubIcon from "@assets/icon/GithubIcon";
// constants
import { routes, paths } from "@constants/paths";

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

const footerNavIconConfig = [
    {
        icon: <MailIcon />,
        href: routes.mail
    },
    {
        icon: <GithubIcon />,
        href: routes.github
    },
    {
        icon: <BlogIcon />,
        href: paths.posts
    }
];

export default function Layout() {
    return (
        <Container>
            {/* header */}
            <Navbar>
                <NavContainer>
                    <RowFlex
                        justifyContent="space-between"
                        gap={6}
                    >
                        <NavLink
                            href={paths.home}
                            css={css`
                                font-weight: 700;
                            `}
                        >
                            Donggyu
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
            
            {/* content */}
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
            
            {/* footer */}
            <Footer>
                <ColumnFlex
                    alignItems="center"
                    gap={16}
                >
                    <RowFlex
                        gap={20}
                        alignItems="center"
                        justifyContent="center"
                    >
                        {footerNavIconConfig.map(({ icon, href }, idx) => (
                            <Link
                                key={`link-icon-${idx}`}
                                href={href}
                            >
                                {icon}
                            </Link>
                        ))}
                    </RowFlex>

                    <Copyright>
                        © 2024 Donggyu Kim, All rights reserved
                    </Copyright>
                </ColumnFlex>
            </Footer>
        </Container>
    )
}