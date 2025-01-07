// emotion
import styled from "@emotion/styled";

export const RootStyle = styled.article`
    width: 100%;
    height: 100%;
    padding: 100px 0px 60px 0px;
`;

export const Profile = styled.img`
    width: 160px;
    height: 160px;
    object-fit: cover;
    box-sizing: border-box;
    border-radius: var(--border-radius-full);
    margin-bottom: 4px;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
`;