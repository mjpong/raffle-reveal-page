import React, { useState } from 'react';
import { useSelector, useDispatch, connect } from "react-redux"
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export default function RaffleDraw() {

    const [results, setResults] = useState(false)


    // const raffle = useSelector(state => state.raffle)
    // const dispatch = useDispatch()
    // const { revealRaffle } = bindActionCreators(actionCreators, dispatch)

    const revealRaffle = () => {
        if (results === false) {
            return (
                setResults(true)
            )
        }
        else {
            return
        }

    }

    return (
        <React.Fragment>
            <div className="collectors-event">

                <div className="collector-header row">
                    <h1>Collectors Event</h1>
                    <p>Participate and win high quality curated NFTs</p>
                </div>
                <div className="row results-container">
                    <div className="drag-ticket">
                        <div className="winner"
                            style={{ display: results === true ? "block" : "none" }}>
                            <img src={require("../images/spinningcoin.png").default} height="300" width="300" alt="logo" />
                            <h1>Congratulations!</h1>
                            <p>You've just won the Spinning Bitcoin from the Raffle!</p>
                        </div>
                        <div className="winner"
                            style={{ display: results === true ? "none" : "block" }}>
                            <img src={require("../images/drawone.png").default} height="400" width="300" alt="logo" />
                            <p>Use the button below to draw your tickets!</p>
                        </div>
                    </div>

                </div>
                <div className="draw-ticket row p-5">
                    <div className="col-3">
                        <img src={require("../images/Group1888.png").default} alt="logo" />
                    </div>
                    <div className="col-5">
                        <h5>Draw Tickets</h5>
                        <p>(NUMBER) Tickets found</p>
                        <p>Open your tickets and get a chance to win $100 worth of high quality NFTs!</p>
                        <a href="#">Learn More</a>
                    </div>
                    <div className="col-4">
                        <div class="btn-group">
                            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Tickets
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">Silver Ticket</a></li>
                                <li><a class="dropdown-item" href="#">Gold Ticket</a></li>
                                <li><a class="dropdown-item" href="#">Diamond Ticket</a></li>
                            </ul>
                            <button className="btn btn-primary" onClick={revealRaffle}>Draw Ticket</button>

                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}


// RaffleDraw.propTypes = {
//     revealRaffle: PropTypes.func.isRequired,
//     img: PropTypes.array.isRequired
// }


// export default connect(null, { revealRaffle })(RaffleDraw);