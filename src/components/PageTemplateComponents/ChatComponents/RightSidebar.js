import * as React from 'react';
import { Sidebar, ExpansionPanel } from "@chatscope/chat-ui-kit-react";

export default function RightSidebar({ conversation }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Sidebar position="right">
      <ExpansionPanel open title="Match Info">
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </ExpansionPanel>
    </Sidebar>
  );
}
