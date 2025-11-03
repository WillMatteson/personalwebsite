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

const Salesforce = () => {
    return (
        <div>
            <TopImageWrapper>
                <StyledImage className='' src='./salesforcelogo.png' />
                <StyledTitleSubTitleDiv>
                    <StyledParagraph>Director of Product - Salesforce</StyledParagraph>
                    <StyledParagraph>San Francisco</StyledParagraph>
                </StyledTitleSubTitleDiv>
            </TopImageWrapper>
            <p>Working on Agentforce voice</p>
        </div>
    )
}

export default Salesforce
