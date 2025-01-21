// emotion
import styled from "@emotion/styled";

export const RootStyle = styled.section`
    width: 100%;
    height: 100%;
    padding: 100px 0px;
`;

export const Card = styled.a`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    margin: 10px 0px;
`;

export const CardMediaBox = styled.div`
    position: relative;
    display: flex;
    height: 260px;
    overflow: hidden;
    border-radius: 24px;
`;

export const CardMedia = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 500ms ease;
    transform: scale(1.0);
    :hover {
        transform: scale(1.1);
    }
`;

export const CardTitle = styled.h2`
    margin: 0px;
    font-size: var(--font-size-h6);
`;

export const CardContent = styled.p`
    display: -webkit-box;
    height: 72px;
    padding: 0px;
    font-size: var(--font-size-medium);
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
`;

export const CardDate = styled.p`
    font-size: var(--font-size-small);
`;