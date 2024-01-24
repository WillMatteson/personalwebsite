import styled from 'styled-components'
import RadarChart from '../radarchart'

const Styledli = styled.li`
  padding: 0px !important;
  margin: 0px 0px !important;
`
const Styledh5 = styled.h5`
  padding: 0px !important;
  margin: 0px 0px !important;
`

const Skills = () => {
    return (
        <div>

            <RadarChart />
            <div>
                <h4>
                    Intrests
                </h4>
                <ul>
                    <Styledli>
                        <Styledh5>Lorem ipsum </Styledh5>
                    </Styledli>
                    <Styledli>
                        <Styledh5>Lorem ipsum </Styledh5>
                    </Styledli>
                    <Styledli>
                        <Styledh5>Lorem ipsum </Styledh5>
                    </Styledli>
                </ul>
            </div>

        </div>
    )
}

export default Skills
