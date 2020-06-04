import React from 'react';
import './AccountInfo.css';

interface ContainerProps {
    name: string;
}

const AccountInfo: React.FC<ContainerProps> = ({ name }) => {
    return (
        <div className="container">
            <p>Account Information here</p>
        </div>
    );
};

export default AccountInfo;