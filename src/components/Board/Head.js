import React from 'react';

class Head extends React.Component {

    renderHead = () => {
        return (
            <thead>
                <tr>
                    <th>Spot</th>
                    <th>Name</th>
                    <th>Dr</th>
                    <th>Time</th>
                    <th>Tech</th>
                    <th>Rm</th>
                    <th>Description</th>
                </tr>
           </thead>
        );
    }

    render() {
        return this.renderHead();
    }
}


export default Head;