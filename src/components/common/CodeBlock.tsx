// emotion
import styled from "@emotion/styled";

interface CodeBlockProps {
    code: string;
}

const RootStyle = styled.div`
    position: relative;
    display: flex;
    overflow: auto;
    background-color: var(--white100);
    border-radius: 20px;
`;

const Pre = styled.pre`
    width: 100%;
    padding: 20px;
    tab-size: 2;
`;

const CodeBlock = ({
    code
}: CodeBlockProps) => (
    <RootStyle>
        <Pre>
            <code>
                {code.replace("code:", "")}
            </code>
        </Pre>
    </RootStyle>
)

export default CodeBlock;