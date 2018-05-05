import React from 'react';

import Deal from './Deal.js'

const SpecialDeals = () => {
    const deals = ['2 for 1', '20% off', '10% off'];
    
    const dealsElements = deals.map(deal => {
        return <Deal name={deal}></Deal>;
    });
    
    return (<div>
        {dealsElements}
    </div>);
}

export default SpecialDeals;