/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DualScreenDismiss",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L14.5 4.79l-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7L15.21 5.5l1.14-1.15ZM17 16v-5.6c.36-.18.7-.4 1-.66V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5.02c.03.34.1.68.19 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V7.8c.25.54.6 1.04 1 1.47V17H16a1 1 0 0 0 1-1Zm-11-.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
    FILLED : "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L14.5 4.79l-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7L15.21 5.5l1.14-1.15ZM14.5 11c1.33 0 2.55-.47 3.5-1.26V16a2 2 0 0 1-2 2h-5.5V9.27a5.48 5.48 0 0 0 4 1.73Zm-5-3.2A5.47 5.47 0 0 1 9.02 6H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5V7.8ZM6 15.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"
  }
});