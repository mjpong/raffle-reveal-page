import React from 'react';

export default class Ticket extends React.Component {

    render() {
        return (
            <React.Fragment>

                <div className="get-more">
                    <div className="get-more-header row">
                        <div className="col-6">
                            <h3>Get More Tickets</h3>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-primary">Buy</button>
                        </div>

                    </div>
                    <div className="ticket-card mt-3">
                        <div className="row">
                            <div className="col-lg-12 col-sm-4">
                                <img src={require("../images/silver-card.png").default} height="180" width="130" alt="card" />
                            </div>
                            <div className="col-lg-12 col-sm-4">
                                <img src={require("../images/gold-card.png").default} height="180" width="130" alt="card" />
                            </div>
                            <div className="col-lg-12 col-sm-4">
                                <img src={require("../images/diamond-card.png").default} height="180" width="130" alt="card" />
                            </div>
                        </div>

                    </div>
                </div>

            </React.Fragment>
        )
    }
}