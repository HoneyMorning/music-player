import React from 'react';

function PlayerList() {
  return (
    <div className="col-lg-8 col-md-12">
      <main>
        <div className="card">
          <div className="card-header">Music List</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">黄昏</li>
            <li className="list-group-item">明天，你好</li>
            <li className="list-group-item">海阔天空</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default PlayerList;
