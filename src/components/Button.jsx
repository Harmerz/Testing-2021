/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const SIZES = [
    'font-display font-semibold text-xl lg:text-2xl px-6 py-5 lg:px-10 lg:py-3',
    'font-display font-medium text-sm lg:text-xl px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-2',
];

const HOVERS = [
    'hover:-translate-y-2 hover:shadow-buttonLg',
    'hover:-translate-y-1 hover:shadow-buttonSm',
];

export const Button = (props) => {
    const checkSize = props.size == 'large' ? SIZES[0] : SIZES[1];
    const checkHover = props.size == 'large' ? HOVERS[0] : HOVERS[1];

    return (
        <Link
            to={props.PATH}
            className={`${props.custom} transition transform duration-200 ease-in-out ${checkHover} motion-reduce:transition-none motion-reduce:transform-none`}
        >
            <button
                className={`text-white bg-blue-dark ${props.text} ${checkSize}`}
                onClick={props.onClick}
                type={props.type}
            >
                {props.children}
            </button>
        </Link>
    );
};
