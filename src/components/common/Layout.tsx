// react
import { Outlet } from "react-router-dom";
// emotion
import { css } from "@emotion/react";
// components
import { RowFlex } from "@components/common/FlexBox";
import { Navbar, NavContainer, Link } from "@components/common/Layout.styles";
// constants
import { paths } from "@constants/paths";

export default function Layout() {
    return (
        <>
            <header>
                <Navbar>
                    <NavContainer>
                        <RowFlex
                            alignItems="flex-start"
                            justifyContent="space-between"
                            gap={6}
                            css={css`
                                width: 100%;
                                height: 40px;
                            `}
                        >
                            <Link
                                href={paths.home}
                            >
                                <p>
                                    Donggyu Kim
                                </p>
                            </Link>
                            
                            <RowFlex
                                gap={16}
                            >
                                <p>
                                    Career
                                </p>
                                <p>
                                    Works
                                </p>
                                <p>
                                    Posts
                                </p>
                            </RowFlex>

                        </RowFlex>
                    </NavContainer>
                </Navbar>
            </header>
            <Outlet />
        </>
    )
}