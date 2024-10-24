// react
import { Outlet } from "react-router-dom";
// emotion
import { css } from "@emotion/react";
// components
import { ColumnFlex } from "@components/common/FlexBox";
import { Navbar, NavContainer } from "@components/common/Layout.styles";

export default function Layout() {
    return (
        <>
            <header>
                <Navbar>
                    <NavContainer>
                        <ColumnFlex
                            alignItems="flex-start"
                            gap={6}
                            css={css`
                                width: 200px;
                                height: 100%;
                            `}
                        >
                            <p css={css`
                                    font-weight: 600;
                                    letter-spacing: 0.08em;
                                    font-size: var(--font-size-small);
                                `}
                            >
                                김동규
                            </p>
                            <p css={css`
                                    color: #666666;
                                    letter-spacing: 0.03em;
                                    font-size: var(--font-size-small);
                                `}
                            >
                                Frontend Developer
                            </p>
                        </ColumnFlex>
                    </NavContainer>
                </Navbar>
            </header>
            <Outlet />
        </>
    )
}