import styled from 'styled-components'

const Styledli = styled.li`
  padding: 0px !important;
  margin: 0px 0px !important;
`
const Styledh5 = styled.h5`
  padding: 0px !important;
  margin: 0px 0px !important;
`

const Writing = () => {
    return (
        <div>
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
    )
}

export default Writing
