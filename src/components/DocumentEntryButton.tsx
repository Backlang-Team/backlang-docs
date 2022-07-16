import { NavLink } from "solid-app-router";
import { Component } from "solid-js";

interface DocumentEntryButtonProps {
  name: string;
  path: string;
}

const DocumentEntryButton: Component<DocumentEntryButtonProps> = (
  props: DocumentEntryButtonProps
) => {
  return (
    <NavLink
      inactiveClass="flex w-full h-12 bg-slate-100 items-center pl-4 focus:outline-none"
      activeClass="flex w-full h-12 bg-slate-50 items-center pl-4 shadow-inner focus:outline-none"
      href={`/docs/${props.path}`}
    >
      <h2 class="font-inter font-thin">{props.name}</h2>
    </NavLink>
  );
};

export default DocumentEntryButton;
