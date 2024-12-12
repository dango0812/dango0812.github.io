// emotion
import styled from "@emotion/styled";

export const Link = styled.a`
    width: 100%;
    height: 100%;
    margin: 10px 0px;
    text-decoration: none;
    :hover {
        img {
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            -ms-transform: scale(1.2);
            transform: scale(1.2);
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
        }
        h2 {
            background-image:linear-gradient(to right, #396680, #6396c9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`;

export const ImageWrapper = styled.div`
    min-width: 140px;
    max-width: 140px;
    overflow: hidden;
    border-radius: 12px;
`;

export const Image = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 110px;
    object-fit: cover;
    overflow: hidden;
    transform: none;
`;

export const ProjectTitle = styled.h2`
    font-size: 17.8px;
    font-weight: 600;
    letter-spacing: 0.02em;
    line-height: 160%;
    margin: 0px;
`;

export const ProjectDescription = styled.p`
    max-width: 592px;
    min-height: 53.75px;
    max-height: 70px;
    font-size: 16.8px;
    letter-spacing: 0.01em;
    padding: 0px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`