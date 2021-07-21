import React from 'react';
import { Link } from 'react-router-dom';

export function MaxText({ text, PATH }) {
    const MAX_LENGTH = 150;

    return (
        <div>
            {text.length > MAX_LENGTH ? (
                <div>
                    {`${text.substring(0, MAX_LENGTH)}...`}
                    <Link to={PATH}>more</Link>
                </div>
            ) : (
                <p>{text}</p>
            )}
        </div>
    );
}
