// react
import { Outlet } from "react-router-dom";
// emotion
import { css } from "@emotion/react";
// components
import { RowFlex } from "@components/common/FlexBox";
import { Navbar, NavContainer } from "@components/common/Layout.styles";

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
                                height: 100%;
                            `}
                        >
                            <p css={css`
                                    color: #505050;
                                    font-size: 16px;
                                `}
                            >
                                Donggyu Kim
                            </p>

                            <p>
                                about me
                            </p>
                        </RowFlex>
                    </NavContainer>
                </Navbar>
            </header>
            <Outlet />
        </>
    )
}