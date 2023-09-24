import PropTypes from 'prop-types'; 
import { useContext } from 'react';
import { AssetContext } from '../ContextApiTop/ContextApiTop';

const ContextApiBottom = ({asset}) => {

    //recieve context
    const gift = useContext(AssetContext);

    return (
        <div>
            <h1>Context Api Bottom</h1>
            <p>Asset by prop drilling is : {asset}</p>
            <p>Asset by Context API is : {gift}</p>
        </div>
    );
};

ContextApiBottom.propTypes = {
    asset: PropTypes.string
}

export default ContextApiBottom;