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
const Styledh5 = styled.h5`
  padding: 0px !important;
  margin: 0px 0px !important;
`

const NASA = () => {
    return (
        <div>
            <TopImageWrapper >
                <StyledImage className='' src='./NASA_logo.png' />
                <StyledTitleSubTitleDiv>
                    <StyledParagraph >Role - Company (NASA)</StyledParagraph>
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
                        <Styledh5>Link 1</Styledh5>
                    </Styledli>
                    <Styledli>
                        <Styledh5>Link 1</Styledh5>
                    </Styledli>
                    <Styledli>
                        <Styledh5>Link 1</Styledh5>
                    </Styledli>
                </ul>
            </div>

        </div>
    )
}

export default NASA
