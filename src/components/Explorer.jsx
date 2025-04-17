import styled from 'styled-components'
import { Modal, Frame } from '@react95/core'
import PropTypes from "prop-types"
import { Folder, WindowsExplorer } from '@react95/icons';

const StyledItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
    cursor: pointer;
	width: 33.33%;
    gap: 3px;
	padding: 10px 0;
`;

const StyledSpan = styled.span`
	margin-top: 5px;
`

const FilesWrapper = styled.div`
	display: flex;
	grid-template-columns: repeat(3, 1fr);
	flex-wrap: wrap;
`;

function Explorer({ closeExplorer, isMobile, openNotepad }) {
    return (
        <Modal
            icon={<Folder />}
            title="Work"
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
                    <StyledItem onClick={() => openNotepad("Play")}>
                        {/* Play Studios logo */}
                        <img src="./playlogo.png" style={{ maxWidth: "50px" }} alt="" />
                        <StyledSpan>Play.txt</StyledSpan>
                    </StyledItem>
                    <StyledItem onClick={() => openNotepad("Polygon")}>
                        {/* You can change this ny replacing the file Item1.png in public folder with any logo image of same size */}
                        <img src="./polygonlogo.png" style={{ maxWidth: "50px" }} alt="" />
                        <StyledSpan>Polygon.txt</StyledSpan>
                    </StyledItem>
                    <StyledItem onClick={() => openNotepad("Riot")}>
                        {/* You can change this ny replacing the file Riot.png in public folder with any logo image of same size */}
                        <img src="./riotlogo.png" style={{ maxWidth: "50px" }} alt="" />
                        <StyledSpan>Riot Games.txt</StyledSpan>
                    </StyledItem>
                    <StyledItem onClick={() => openNotepad("Bain")}>
                        {/* You can change this ny replacing the file Bain.png in public folder with any logo image of same size */}
                        <img src="./bainlogo.png" style={{ maxWidth: "50px" }} alt="" />
                        <StyledSpan>Bain.txt</StyledSpan>
                    </StyledItem>
                    <StyledItem onClick={() => openNotepad("NASA")}>
                        {/* You can change this ny replacing the file NASA.png in public folder with any logo image of same size */}
                        <img src="./nasalogo.png" style={{ maxWidth: "50px" }} alt="" />
                        <StyledSpan>NASA.txt</StyledSpan>
                    </StyledItem>
                    <StyledItem onClick={() => openNotepad("Education")}>
                        {/* You can change this ny replacing the file NASA.png in public folder with any logo image of same size */}
                        <img src="./jhulogo.png" style={{ maxWidth: "50px" }} alt="" />
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


