import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    background: #693AB6;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #C4C4C4;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover{
        background: ${shade(0.2, '#693AB6')};
    }
`;