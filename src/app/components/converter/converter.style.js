import styled from 'styled-components';
import media from '../../../common/media'

export const MainContainer= styled.div`
                    background-color: #ffffa
                    color: #545151;
                    display: flex;
                    justify-content:space-around;
                    align-items: center;
                    ${media.tablet`flex-direction: column;`}
                    `;
export const ConvertButton=styled.img`
                    max-width: 100px;
                    `;

export const ErrorMessage=styled.div`
                            display: flex;
                            justify-content: center;
                            color: #B23C3C;
                            font-size: 1.2em;
                        `;