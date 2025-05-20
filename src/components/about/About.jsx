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
                Will Matteson
            </h2>
            <StyledPara>
                Hi there! I lead product at <a href="play.ai" target="_blank" rel="noopener noreferrer">play.ai</a>. Most recently I led games product at Polygon Labs, building blockchain products for game developers. Before that I did <b>*REDACTED*</b> at Riot Games.
            </StyledPara>

            <StyledPara>
                Currently building out voice based computing interfaces, spanning agents, text to speech, creator tools, and some things I'm not allowed to talk about yet.
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