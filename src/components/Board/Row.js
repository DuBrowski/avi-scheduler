import React from 'react';

import'../../styles/Board.css';


class Row extends React.Component {

    renderTableRows = () => {
        const appts = this.props.appts;
        if (!appts) return null; 
        const scheduleRows = appts.map(appt => {
            console.log(`appt: ${appt}`);
            return (
                <tr key={appt.index}>
                    <td>_</td>
                    <td>{appt.name}</td>
                    <td>_</td>
                    <td>NEED</td>
                    <td>_</td>
                    <td>{appt.time}</td>
                    <td>{appt.description}</td>
                </tr>
            );
        });
        return scheduleRows;

    }

    render() {
        return this.renderTableRows();
    }
}


export default Row;