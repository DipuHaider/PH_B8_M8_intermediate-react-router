import { createContext } from "react";
import ContextApiMiddle from "../ContextApiMiddle/ContextApiMiddle";

//Declare a Context
export const AssetContext = createContext('gold');

const ContextApiTop = () => {
    const asset = 'diamond';
    return (
        <div>
            <h1>Context Top </h1>
            
            <AssetContext.Provider value='gold'>
                <ContextApiMiddle asset={asset}></ContextApiMiddle>
            </AssetContext.Provider>
            
        </div>
    );
};

export default ContextApiTop;