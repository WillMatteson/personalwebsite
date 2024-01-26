import styled from 'styled-components'

const TopImageWrapper = styled.div`
   width: full;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   margin: 0px 0px;
   gap: 10px;
   margin-bottom: 10px;
`
const StyledImage = styled.img`
  max-width: 150px;
`
const StyledTitleSubTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px !important;
`
const StyledParagraph = styled.p`
 
  padding: 0px !important;
  margin: 0px 0px !important;
`
const Styledli = styled.li`
  padding: 0px !important;
  margin: 0px 0px !important;
`
const Styleda = styled.a`
  padding: 0px !important;
  margin: 0px 0px !important;
  color: black !important;
  text-decoration: none;
  font-weight: 600 !important;
  font-size: 13px;
  cursor: pointer;
`

const Polygon = () => {
    return (
        <div>
            <TopImageWrapper >
                <StyledImage className='' src='./polygon.svg' />
                <StyledTitleSubTitleDiv>
                    <StyledParagraph >Senior Director - Polygon Labs </StyledParagraph>
                    <StyledParagraph>04/22 - 01/24, Los Angeles CA</StyledParagraph>
                </StyledTitleSubTitleDiv>
            </TopImageWrapper>
            <p>
    I joined Polygon Labs to build out our games product and footprint. Starting from scratch, I built out <a href="URL_to_reference_documentation" target="_blank">reference documentation</a>, tested out backend providers, 
    and shipped two games focused protocols (
    <a href="URL_to_CDK" target="_blank">CDK</a> & <a href="URL_to_IXM_zkEVM" target="_blank">IMX zkEVM</a>).
</p>

        

        </div>
    )
}

export default Polygon
