import React from "react";
import { WindowExplorer } from "packard-belle";
import Window from "../tools/Window";
import "./_styles.scss";

const Explorer = props => (
  <Window {...props}>
    {rnd => (
      <WindowExplorer
        title={props.title}
        footer={[
          { text: "needs 100% width height" },
          { text: "overflow control" }
        ]}
        onClose={() => props.onClose(props)}
        onMinimize={() => {}}
        onRestore={rnd.restore}
        onMaximize={rnd.maximize}
        changingState={rnd.state.changingState}
      >
        Children
      </WindowExplorer>
    )}
  </Window>
);

export default Explorer;
