import React from 'react';
import './center.css';
import Table from "./table";

class Center extends React.Component {

    render() {
        return (
            <div id="centerpiece" className="centerpiece">
                <div style={{ marginLeft: '50%'}}>                <h1>I'm in center</h1>
                </div>
                <Table/>
            </div>
        )
    }
}

export default Center