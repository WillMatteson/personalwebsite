import styled from 'styled-components'

const TopImageWrapper = styled.div`
   width: full;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   margin: 20px 0px;
   gap: 20px;
   margin-bottom: 20px;
`
const StyledImage = styled.img`
  max-width: 150px;
`
const StyledTitleSubTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px !important;
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

const Bain = () => {
    return (
        <div>
            <TopImageWrapper >
                <StyledImage className='' src='./Bain_logo.png' />
                <StyledTitleSubTitleDiv>
                    <StyledParagraph >Role - Company (Item 3)</StyledParagraph>
                    <StyledParagraph>Date - Date</StyledParagraph>
                </StyledTitleSubTitleDiv>
            </TopImageWrapper>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, qui voluptatem, quia dolor ullam eligendi sapiente, esse fugiat aliquam perferendis consectetur obcaecati magni. Ab suscipit, porro similique eos sunt expedita.
            </p>
            <div>
                <h4>
                    Selected Projects
                </h4>
                <ul>
                    <Styledli>
                        <Styleda href=''>Link 1</Styleda>
                    </Styledli>
                    <Styledli>
                        <Styleda href=''>Link 1</Styleda>
                    </Styledli>
                    <Styledli>
                        <Styleda href=''>Link 1</Styleda>
                    </Styledli>
                </ul>
            </div>

        </div>
    )
}

export default Bain