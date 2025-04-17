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

const Play = () => {
    return (
        <div>
            <TopImageWrapper >
                <StyledImage className='' src='./playlogo.png' />
                <StyledTitleSubTitleDiv>
                    <StyledParagraph>Product - PlayAI</StyledParagraph>
                    <StyledParagraph>09/2024 - Present, Remote</StyledParagraph>
                </StyledTitleSubTitleDiv>
            </TopImageWrapper>
            <p>
                At PlayAI, we're making computers speak like Humans.
            </p>
            <p>
                Voice AI foundational model R&D and evals. Accounts, commerce systems, platform stability.
            </p>
        </div>
    )
}

export default Play
