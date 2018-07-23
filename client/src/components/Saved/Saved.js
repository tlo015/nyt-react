import React from "react";

const Result = () => (
    <div className="container">
        <div className="card">
            <div className="card-header">
                Saved
            </div>
            <div className="card-body">
                <div className="card">
                    <div className="card-header">
                        <h4> Title </h4>
                        <h6> Date </h6>
                        <button className="btn btn-primary">Delete</button>
                    </div>
                    <div className="card-body">
                        <h4>Notes</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Result;