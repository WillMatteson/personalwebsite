import styled from 'styled-components'

const Styledli = styled.li`
  padding: 0px !important;
  margin: 0px 0px !important;
`
const Styledh5 = styled.h5`
  padding: 0px !important;
  margin: 0px 0px !important;
`

const StyledUl = styled.ul`
  padding: 0px ;
  padding-left: 15px;
  margin-top: 40px;
`
const StyledPara = styled.p`
 margin-top: 20px;
`

const About = () => {
    return (
        <div>
            <h2>
                Lore v11.25 release
            </h2>
            <StyledPara>
                hi there! I work on voice agents at salesforce. 
            </StyledPara>

            <StyledPara>
            before that I made computers speak like humans at play.ai, did <b>*REDACTED*</b> at riot games, and arranged shapes at bain & company. I also worked on a spaceship that got stuck in space.
            </StyledPara>
            <StyledUl >
                <Styledli>
                    <Styledh5>
                    <a href="mailto:willtmatteson@gmail.com" target="_blank" rel="noopener noreferrer">email: willtmatteson@gmail.com</a>
                    </Styledh5>
                </Styledli>
                <Styledli>
                    <Styledh5>
                    <a href="https://www.linkedin.com/in/willmatteson/" target="_blank" rel="noopener noreferrer">linkedin</a>
                    </Styledh5>
                </Styledli>
                <Styledli>
                    <Styledh5>
                    <a href="https://twitter.com/0xlegofan" target="_blank" rel="noopener noreferrer">twitter</a>
                    </Styledh5>
                </Styledli>
                
            </StyledUl>
        </div>
    )
}

export default About