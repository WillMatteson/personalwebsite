import styled from 'styled-components'
import { Modal, Frame } from '@react95/core'
import PropTypes from "prop-types"
import { WindowsExplorer } from '@react95/icons';

const StyledItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
    cursor: pointer;
	width: 25%;
    gap: 3px;
	padding: 10px 0;
`;

const StyledSpan = styled.span`
	margin-top: 5px;
`

const FilesWrapper = styled.div`
	display: flex;
	grid-template-columns: repeat(4, 1fr);
	flex-wrap: wrap;
`;

function Explorer({ closeExplorer, isMobile, openNotepad }) {
    return (
        <Modal
            icon={<WindowsExplorer />}
            title="Explorer - Work"
            closeModal={closeExplorer}
            style={{
                left: isMobile ? '2%' : '15%',
                top: '30%',
                width: isMobile ? '96%' : 400,
            }}
            menu={[
                { name: 'File', list: [] },
                { name: 'Edit', list: [] },
                { name: 'Help', list: [] },
            ]}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
            >
                {/* Work Items  */}
                <FilesWrapper>
                    <StyledItem onClick={() => openNotepad("Polygon")}>
                        {/* You can change this ny replacing the file Item1.png in public folder with any logo image of same size */}
                        <img src="./Polygon_icon.png" style={{ maxWidth: "50px" }} alt="" />
                        <StyledSpan>Polygon.txt</StyledSpan>
                    </StyledItem>
                    <StyledItem onClick={() => openNotepad("Riot")}>
                        {/* You can change this ny replacing the file Riot.png in public folder with any logo image of same size */}
                        <img src="./Riot_icon.png" style={{ maxWidth: "50px" }} alt="" />
                        <StyledSpan>Riot Games.txt</StyledSpan>
                    </StyledItem>
                    <StyledItem onClick={() => openNotepad("Bain")}>
                        {/* You can change this ny replacing the file Bain.png in public folder with any logo image of same size */}
                        <img src="./Bain_icon.png" style={{ maxWidth: "50px" }} alt="" />
                        <StyledSpan>Bain.txt</StyledSpan>
                    </StyledItem>
                    <StyledItem onClick={() => openNotepad("NASA")}>
                        {/* You can change this ny replacing the file NASA.png in public folder with any logo image of same size */}
                        <img src="./NASA_icon.png" style={{ maxWidth: "50px" }} alt="" />
                        <StyledSpan>NASA.txt</StyledSpan>
                    </StyledItem>
                    <StyledItem onClick={() => openNotepad("Education")}>
                        {/* You can change this ny replacing the file NASA.png in public folder with any logo image of same size */}
                        <img src="./Education_icon.png" style={{ maxWidth: "50px" }} alt="" />
                        <StyledSpan>Education.txt</StyledSpan>
                    </StyledItem>
                </FilesWrapper>
            </Frame>
        </Modal>
    )
}

Explorer.propTypes = {
    closeExplorer: PropTypes.func,
    isMobile: PropTypes.bool,
    openNotepad: PropTypes.func,

}


export default Explorer

