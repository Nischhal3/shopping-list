import {css} from 'styled-components';

export const mobile280 = (props) =>{
    return css`
        @media only screen and (max-width: 280px) {
            ${props}
        }
    `
}

export const mobile = (props) =>{
    return css`
        @media only screen and (max-width: 414px){
            ${props}
        }
    `
};


export const mobile540 = (props) =>{
    return css`
        @media only screen and (min-width: 415px) and (max-width: 540px) {
            ${props}
        }
    `
};
export const mobile820 = (props) =>{
    return css`
        @media only screen and (min-width: 541px) and (max-width: 912px) {
            ${props}
        }
    `
};

export const mobile1024 = (props) =>{
    return css`
        @media only screen and (min-width: 914px) and (max-width: 1024px) {
            ${props}
        }
    `
};