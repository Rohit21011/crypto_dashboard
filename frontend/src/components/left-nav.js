import React from "react";
import { Link } from "react-router-dom";
const LeftNav=()=>{
    return(
        <div className="leftnav">
            <ul type="none">
                <li><Link to="/dashboard"><i class="material-icons">dashboard</i> &nbsp;&nbsp; Dashboard</Link></li>
                <li><Link to="/mywallet"><i class="material-icons">account_balance_wallet</i> &nbsp;&nbsp; My Wallet</Link></li>
                <li><Link to="/market"><i class="material-icons">insert_chart</i>&nbsp;&nbsp; Market</Link></li>
                <li><Link to="/portfolio"><i class="material-icons">monetization_on</i>&nbsp;&nbsp;Portfolio</Link></li>
                <li><Link to="/history"><i class="material-icons">history</i>&nbsp;&nbsp;History</Link></li>
                <li><Link to="/news"><i class="material-icons">tv</i>&nbsp;&nbsp;News</Link></li>
                <li><Link to="/setting"><i class="material-icons">settings</i>&nbsp;&nbsp;Setting</Link></li>
            </ul>
        </div>


    )
}
export default LeftNav;