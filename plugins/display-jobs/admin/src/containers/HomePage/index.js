/*
 *
 * HomePage
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
import { useState } from "react";
import pluginId from "../../pluginId";
//importing the class for fetching the data
import axios from "axios";
import { useEffect } from "react";
import CreateList from "./CreateList"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import NextPluginHomePage from "../NextPluginHomePage/NextPluginHomePage";


function CreateCustomList(props){
  return (
    <CreateList key={props.id} 
    Job_Title = {props.Job_Title}
    job_guidelines = {props.job_guidelines}
    assigned_clent = {props.assigned_clent}
    assigned_consultant = {props.assigned_consultant}
    description = {props.description}
    ></CreateList>
  );
}

const HomePage = () => {

  let errorCode = "job is not defined";

  const [jobs,setJobs] = useState(null);


  useEffect(() => {
    axios.get("http://localhost:1337/jobs/").then((response) => { //useEffect() is used to call a function only once
      setJobs(response.data);                                     // until the secondparameter changes.   
      console.log(response.data);                                 //in this case this function will call only once
    });                                                           // because the second parameter is empty.
  }, []);

  if (jobs) {
    return (
      <div>
        <Link to ="/nextPluginHomePage">Go to NextPage</Link>
        <h1>{pluginId}&apos;s HomePage</h1>
        <p>Happy coding</p> 
        {jobs.map(CreateCustomList)}
      </div>
    );
  }

  return <div></div>;
};

export default memo(HomePage);
