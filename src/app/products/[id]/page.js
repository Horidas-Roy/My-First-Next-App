import React from 'react';

const DynamicRoute = ({params, searchParams}) => {
    console.log(searchParams); 
    return (
        <div>
            <h2>This is dynamic route: {params.id}</h2>
            <h2>SEarch By: {searchParams.category}</h2>
        </div>
    );
};

export default DynamicRoute;