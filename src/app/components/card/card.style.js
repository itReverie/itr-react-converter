import styled from 'styled-components';
import media from '../../../common/media'

export const StyledCard=styled.div`
                margin: 50px 10px 50px 10px;
                padding:30px 30px 0px 30px;
                background-color: #EBFBF7;
                text-align:center;
                ${media.tablet`margin: 20px 10px 20px 10px;`}`

export const Title=styled.div`
                text-transform: uppercase;
                margin: 20px;
                text-align: center;
                font-size: medium;
                font-weight: bold;
            `;
export const StyledResultAmount=styled.div`
            margin: 20px auto 20px auto;
            font-size: 1.1em;
            text-align: center;
            `;
export const OutputUnit=styled.div`
            margin-top:15px;
            `;