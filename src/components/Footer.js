import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Footer = () => (
  <p>
    Show:{" "}
    <FilterLink filter={VisibilityFilters.SHOW_ALL} className="all-filter">
      All
    </FilterLink>
    {", "}
    <FilterLink
      filter={VisibilityFilters.SHOW_ACTIVE}
      className="active-filter"
    >
      Active
    </FilterLink>
    {", "}
    <FilterLink
      filter={VisibilityFilters.SHOW_COMPLETED}
      className="completed-filter"
    >
      Completed
    </FilterLink>
  </p>
);

export default Footer;
