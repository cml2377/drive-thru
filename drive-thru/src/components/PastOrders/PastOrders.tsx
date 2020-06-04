import React from 'react';
import './PastOrders.css';

interface ContainerProps {
    name: string;
}

const PastOrders: React.FC<ContainerProps> = ({ name }) => {
    return (
        <div className="container">
            <p>Archived orders here</p>
        </div>
    );
};

export default PastOrders;