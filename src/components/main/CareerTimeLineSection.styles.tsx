// emotion
import styled from "@emotion/styled";

export const TimeLine = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 12px;
    padding-bottom: 40px;
    padding-bottom: 2.5rem;
    :not(:last-child) {
        ::after {
            content: '';
            position: absolute;
            display: block;
            width: 2px;
            top: 2.8rem;
            left: 16px;
            bottom: 0px;
            background-color: #bebebe;
        }    
    }
`;

export const TimeLineIconBox = styled.div`
    position: relative;
`;

export const TimeLineIcon = styled.div<{
    color: string;
    bgColor: string;
}>`
    display: inline-flex;
    align-items: center;
    padding: 0.375rem;
    border-radius: 24px;
    color: ${({ color }) => color};
    background-color: ${({ bgColor }) => bgColor};
`;