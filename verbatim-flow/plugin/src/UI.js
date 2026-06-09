function getToolbarItems() {
  let items = {
    guid: window.Asc.plugin.info.guid,
    tabs: [{
      id: "ribbon",
      text: "Verbatim",
      items: [
          {
              id: "SendToSpeechCursor",
              type: "button",
              text: "Send to speech cursor"
          },
          {
              id: "SendToSpeechEnd",
              type: "button",
              text: "Send to speech end"
          },
          {
            id: "QuickAnalyticsSettings",
            type: "button",
            text: "Quick analytics settings"
          },
          {
            id: "InsertCellAbove",
            type: "button",
            text: "Insert cell above"
          },
          {
            id: "InsertCellBelow",
            type: "button",
            text: "Insert cell below"
          },
          {
            id: "MergeCells",
            type: "button",
            text: "Merge cells"
          },
          {
            id: "ToggleGroup",
            type: "button",
            text: "Toggle group"
          },
          {
            id: "ToggleHighlighting",
            type: "button",
            text: "Toggle highlighting"
          },
          {
            id: "ToggleEvidence",
            type: "button",
            text: "Toggle evidence"
          },
          {
            id: "ExtendArgument",
            type: "button",
            text: "Extend argument"
          },
          {
            id: "InsertRowAbove",
            type: "button",
            text: "Insert row above"
          },
          {
            id: "InsertRowBelow",
            type: "button",
            text: "Insert row below"
          },
          {
            id: "DeleteRow",
            type: "button",
            text: "Delete row"
          },
          {
            id: "MoveUp",
            type: "button",
            text: "Move up"
          },
          {
            id: "MoveDown",
            type: "button",
            text: "Move down"
          },
          {
            id: "GoToBottom",
            type: "button",
            text: "Go to bottom"
          },
          {
            id: "InsertCellAbove",
            type: "button",
            text: "Insert cell above"
          },
          {
            id: "InsertCellBelow",
            type: "button",
            text: "Insert cell below"
          },
          {
            id: "MergeCells",
            type: "button",
            text: "Merge cells"
          },
          {
            id: "ToggleGroup",
            type: "button",
            text: "Toggle group"
          },
          {
            id: "ToggleHighlighting",
            type: "button",
            text: "Toggle highlighting"
          },
          {
            id: "ToggleEvidence",
            type: "button",
            text: "Toggle evidence"
          },
          {
            id: "ExtendArgument",
            type: "button",
            text: "Extend argument"
          },
          {
            id: "InsertRowAbove",
            type: "button",
            text: "Insert row above"
          },
          {
            id: "InsertRowBelow",
            type: "button",
            text: "Insert row below"
          },
          {
            id: "DeleteRow",
            type: "button",
            text: "Delete row"
          },
          {
            id: "MoveUp",
            type: "button",
            text: "Move up"
          },
          {
            id: "MoveDown",
            type: "button",
            text: "Move down"
          },
          {
            id: "GoToBottom",
            type: "button",
            text: "Go to bottom"
          },
          {
            id: "AddFlowAff",
            type: "button",
            text: "Add flow aff"
          },
          {
            id: "AddFlowNeg",
            type: "button",
            text: "Add flow neg"
          },
          {
            id: "AddFlowCX",
            type: "button",
            text: "Add flow cx"
          },
          {
            id: "DeleteFlow",
            type: "button",
            text: "Delete flow"
          },
          {
            id: "DeleteEmptyFlows",
            type: "button",
            text: "Delete empty flows"
          },
          {
            id: "AutoScoutingInfo",
            type: "button",
            text: "Auto scouting info"
          },
          {
            id: "EnterCell",
            type: "button",
            text: "Enter cell"
          },
          {
            id: "PasteAsText",
            type: "button",
            text: "Paste as text"
          },
          {
            id: "SplitWithWord",
            type: "button",
            text: "Split with word"
          },
          {
            id: "CheatSheet",
            type: "button",
            text: "Cheat sheet"
          },
          {
            id: "FlowSettings",
            type: "button",
            text: "Flow settings"
          }
        ]
    }]
  };

  return items;
};

window.Asc.plugin.init = function () {
    window.Asc.plugin.executeMethod("AddToolbarMenuItem", [getToolbarItems()]);
    console.log(items[0]);
}