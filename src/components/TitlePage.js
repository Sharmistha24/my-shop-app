import React from 'react';

export default function TitlePage({ name, title }) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center">
                <h1 className="text-capitalize font-weight-bold">
                    {name} &nbsp;{title}
                </h1>
            </div>

        </div>
    )
}
