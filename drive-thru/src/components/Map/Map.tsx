import React from 'react';
import './Map.css';

interface ContainerProps {
    name: string;
}

const Map: React.FC<ContainerProps> = ({ name }) => {
    return (
        <div className="container">
            <p>Map stuff here</p>
        </div>
    );
};

export default Map;