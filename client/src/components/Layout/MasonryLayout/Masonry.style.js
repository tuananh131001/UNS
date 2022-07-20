import styled from 'styled-components'

export const Mansory = styled.div`
    display: grid;
    gap: 0.2rem;
    grid-template-columns: repeat(auto-fill,min-max(120px,1fr));
    grid-template-rows:mansonry;
`
export const Image = styled.img`
    border-radius:10px;
    width:10rem;    
`