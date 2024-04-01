import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SimList = () => {
  return (
    <div className="p-4">
      <h1 className="title">Sim</h1>
      <h2 className="subtitle">List of Sim</h2>
      <Link to="/" className="button is-primary mb-2">
        Add New
      </Link>
      {/* <div style={{ width: "900px" }}> */}
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Date D'envoi</th>
            <th>Expediteur</th>
            <th>Destinataire</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>5/12/2024</td>
            <td>admin</td>
            <td>user</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
      {/* </div> */}
    </div>
  );
};

export default SimList;
