import ContextApiBottom from "../ContextApiBottom/ContextApiBottom";
import PropTypes from 'prop-types'; 

const ContextApiMiddle = ({asset}) => {
    return (
        <div>
            <h1>Context Api Middle</h1>
            <ContextApiBottom asset={asset}></ContextApiBottom>
        </div>
    );
};

ContextApiMiddle.propTypes = {
    asset: PropTypes.string
}

export default ContextApiMiddle;