import styled from 'styled-components'
// import { startWebamp } from '../utils/startWebamp';
import { WindowsExplorer } from '@react95/icons';
import PropTypes from "prop-types"



function Shortcuts({ openNotepad, openExlorer, isMobile }) {

    const StyledParent = styled.div`
       width: fit-content;
       display: flex;
       flex-direction: ${isMobile ? "row" :"column"};
       gap:${isMobile ? "20px" :"0px"} ;
     `;

    const StyledShorcut = styled.div`
         margin-left: 10px;
         margin-top: 20px;
         align-items: center;
         cursor: pointer;
         display: flex;
         flex-direction: column;
         gap: 8px;
      `;

    return (
        <StyledParent>
            <div>

                <StyledShorcut onClick={() => openNotepad("About")} >
                    <WindowsExplorer />
                    <div>About me</div>
                </StyledShorcut>
                <StyledShorcut onClick={() => openExlorer()} >
                    <WindowsExplorer />
                    <div>Work</div>
                </StyledShorcut>
            </div>
            <div>

                <StyledShorcut onClick={() => openNotepad("Skills")} >
                    <WindowsExplorer />
                    <div>Skills</div>
                </StyledShorcut>
                <StyledShorcut onClick={() => openNotepad("Writing")} >
                    <WindowsExplorer />
                    <div>Writing</div>
                </StyledShorcut>
            </div>
        </StyledParent>
    )
}

export default Shortcuts

Shortcuts.propTypes = {
    openNotepad: PropTypes.func,
    openExlorer: PropTypes.func,
    isMobile: PropTypes.bool,
}

