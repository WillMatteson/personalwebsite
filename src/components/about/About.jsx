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
                Hi there! I'm a gaming and crypto product manager and technologist. Most recently I led games product at Polygon Labs. Before that I did *REDACTED* at Riot Games.
            </StyledPara>

            <StyledPara>
                I'm currently on sabattical skiing and tinkering in Japan until April, but am interested in compelling product & infra roles at gaming, consumer, and crypto companies.
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