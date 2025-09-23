import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './breadcrumb.scss';

const Breadcrumb = ({ items }) => {
    return (
        <div className="breadcrumb">
            {items.map((item, index) => (
                <span key={index} className={index === items.length - 1 ? 'breadcrumbItem active' : 'breadcrumbItem'}>
                    {item}
                    {index !== items.length - 1 && <ChevronRightIcon className="separator" />}
                </span>
            ))}
        </div>
    );
};

export default Breadcrumb;
