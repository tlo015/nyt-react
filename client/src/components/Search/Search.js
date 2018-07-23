import React from "react";

const Search = () => (
    <div className="container">
        <div className="card">
            <div className="card-header">
                Search
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label for="topic">Topic</label>
                        <input className="form-control" type="text" id="topic" />
                    </div>

                    <div className="form-group">
                        <label for="start">Start Year</label>
                        <input className="form-control" type="text" id="start" />
                    </div>

                    <div className="form-group">
                        <label for="end">End Year</label>
                        <input className="form-control" type="text" id="end" />
                    </div>
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
            </div>
        </div>
    </div>
);

export default Search;