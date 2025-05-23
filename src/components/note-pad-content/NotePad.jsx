import { Modal, Frame } from '@react95/core'
import { Notepad as NotepadIcon } from '@react95/icons';
import PropTypes from "prop-types"
import About from '../about/About';
import Polygon from '../work-items/Polygon';
import Riot from '../work-items/Riot';
import Bain from '../work-items/Bain';
import NASA from '../work-items/NASA';
import Education from '../work-items/Education';
import Play from '../work-items/Play';
import Skills from '../skills/Skills';
import Misc from '../misc/Misc';

function Notepad({ closeNotepad, selectedItem, isMobile }) {
    return (
        <Modal
            icon={<NotepadIcon />}
            title={`${selectedItem}`}
            closeModal={closeNotepad}
            buttons={[{ value: "Close", onClick: closeNotepad }]}
            style={{
                left: isMobile ? '18%' : '50%',
                top: isMobile ? '5%' : '15%',
                width: isMobile ? '80%' : 450,
            }}
            menu={[
                { name: 'File', list: [] },
                { name: 'Edit', list: [] }
            ]}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                padding={20}
                style={{
                    overflowY: "auto",
                    maxHeight: "60vh",
                }}
            >
                <ContentFactory selectedItem={selectedItem} />

            </Frame>
        </Modal >
    )
}

export default Notepad



Notepad.propTypes = {
    closeNotepad: PropTypes.func,
    selectedItem: PropTypes.string,
    isMobile: PropTypes.bool
}


function ContentFactory({ selectedItem }) {

    if (selectedItem === null) {
        return (<div></div>);
    }

    switch (selectedItem) {
        case 'About':
            return <About />
        case 'Play':
            return <Play />
        case 'Polygon':
            return <Polygon />
        case 'Riot':
            return <Riot />
        case 'Bain':
            return <Bain />
        case 'NASA':
            return <NASA />
        case 'Education':
            return <Education />
        case 'Skills':
            return <Skills />
        case 'Misc':
            return <Misc />
        default:
            return (
                <div>
                    <h2>Default Case</h2>
                </div>
            );
    }

}

ContentFactory.propTypes = {
    selectedItem: PropTypes.string,

}
