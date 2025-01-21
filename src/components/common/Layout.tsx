// react
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
// emotion
import { css } from "@emotion/react";
// components
import Container from "@components/common/Container";
import { Navbar, NavContainer, NavList, NavLink } from "@components/common/Layout.styles";
// constants
import { paths } from "@constants/paths";

const navConfig = [
    {
        name: "경력",
        href: paths.career
    },
    {
        name: "블로그",
        href: paths.blog
    },
    {
        name: "프로젝트",
        href: paths.project
    },
];

export default function Layout() {
    return (
        <Fragment>
            <Navbar>
                <NavContainer>
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
                </NavContainer>
            </Navbar>
            
            <Container>
                <Outlet />
            </Container>
        </Fragment>
    )
}