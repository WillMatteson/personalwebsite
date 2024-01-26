import styled from 'styled-components'

const Styledli = styled.li`
  padding: 0px !important;
  margin: 0px 0px !important;
`
const Styledh5 = styled.h5`
  padding: 0px !important;
  margin: 0px 0px !important;
`

const Misc = () => {
    return (
        <div>
            <ul>
                <li><a href="your-link-1">Link Text 1</a></li>
                <li><a href="your-link-2">Link Text 2</a></li>
                <li><a href="your-link-3">Link Text 3</a></li>
            </ul>
        </div>
    )
}

export default Misc
