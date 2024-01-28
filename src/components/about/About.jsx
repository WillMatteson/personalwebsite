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
                Hi there! I'm a product manager in games & crypto. Most recently I led games product at Polygon Labs. Before that I did <b>*REDACTED*</b> at Riot Games.
            </StyledPara>

            <StyledPara>
                I'm currently on sabbatical skiing Japan through March, but am on the hunt for product roles at gaming, consumer, and crypto companies. I like solving platform problems and delivering worthwhile products.
            </StyledPara>
            <StyledUl >
                <Styledli>
                    <Styledh5>
                    <a href="willtmatteson@gmail.com" target="_blank" rel="noopener noreferrer">email</a>
                    </Styledh5>
                </Styledli>
                <Styledli>
                    <Styledh5>
                    <a href="https://www.linkedin.com/in/willmatteson/" target="_blank" rel="noopener noreferrer">linkedin</a>
                    </Styledh5>
                </Styledli>
                <Styledli>
                    <Styledh5>resume on request</Styledh5>
                </Styledli>
            </StyledUl>
        </div>
    )
}

export default About