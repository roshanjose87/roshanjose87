import React, { memo } from "react";
import { Link,Route } from "react-router-dom";
import pluginId from "../../pluginId";

const NextPluginHomePage = () => {
  return (
    <div>
      <Link to={`/plugins/${pluginId}`}>GotoNextPage </Link>
      <h1>This is the nextPlugin HomePage...</h1>
      <h3>
        You are here because you pressed the button which redirects here...
      </h3>
    </div>
  );
};

export default memo(NextPluginHomePage);
