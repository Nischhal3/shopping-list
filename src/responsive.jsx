import {css} from 'styled-components';

export const mobile = (props) =>{
    return css`
        @media only screen and (max-width: 414px) {
            ${props}
        }

    `
};

export const mobile280 = (props) =>{
    return css`
        @media only screen and (max-width: 280px) {
            ${props}
        }
    `
}