import PropTypes from 'prop-types';
import React from 'react';

export const ButtonWithIcon = ({icon, className, onClick}) => {
    return (
        <div className={`cursor-pointer hover:scale-90 transition-all ${className}`} onClick={onClick}>
            {icon}
        </div>
    );
};

ButtonWithIcon.propTypes = {
    icon: PropTypes.element.isRequired,
    className: PropTypes.string
};