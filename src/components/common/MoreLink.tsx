// emotion
import styled from "@emotion/styled";
// components
import { RowFlex } from "@components/common/FlexBox";
// icons
import IconExternalLink from "@assets/icon/IconExternalLink";

interface MoreLinkProps {
    enabledEndDecorator?: boolean;
    children: React.ReactNode;
};

const Link = styled.a`
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    margin-top: 10px;
    ::after {
        display: block;
        content: '';
        width: 0px;
        height: 1.5px;
        background-color: #494949;
        transition: all 300ms;
    }
    :hover::after {
        width: 100%;
    }
`;


export default function MoreLink({
    enabledEndDecorator,
    children
}: MoreLinkProps) {
    return (
        <Link>
            <RowFlex
                gap={2}
            >
                {children}
                
                {enabledEndDecorator && (
                    <IconExternalLink />
                )}
            </RowFlex>
        </Link>
    )
}