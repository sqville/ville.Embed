/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BorderInside",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM4.05 5.54a2 2 0 0 1 1.55-1.5.5.5 0 0 0 .4-.59.5.5 0 0 0-.66-.38 3 3 0 0 0-2.29 2.34.5.5 0 0 0 .4.6.5.5 0 0 0 .6-.47Zm0 8.92a2 2 0 0 0 1.55 1.5.5.5 0 0 1 .4.59.5.5 0 0 1-.66.38 3 3 0 0 1-2.29-2.34.5.5 0 0 1 .4-.6.5.5 0 0 1 .6.47ZM14.66 3.07a.5.5 0 0 0-.66.38.5.5 0 0 0 .46.6 2 2 0 0 1 1.5 1.55.5.5 0 0 0 .59.4.5.5 0 0 0 .38-.66 3 3 0 0 0-2.27-2.27Zm1.29 11.4a2 2 0 0 1-1.55 1.48.5.5 0 0 0-.4.6.5.5 0 0 0 .66.38 3 3 0 0 0 2.29-2.34.5.5 0 0 0-.4-.6.5.5 0 0 0-.6.47ZM16.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5ZM3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Zm5 5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm2.5-11a.5.5 0 0 0-1 0v4h-4a.5.5 0 0 0 0 1h4v4a.5.5 0 0 0 1 0v-4h4a.5.5 0 0 0 0-1h-4v-4Z",
    FILLED : "M8 3.75c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 3.75Zm0 12.5c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75ZM4.6 5.45a1.5 1.5 0 0 1 .94-.88.75.75 0 0 0-.58-1.38 3 3 0 0 0-1.77 1.77.75.75 0 1 0 1.41.49Zm9.95-.85a1.5 1.5 0 0 1 .88.94.75.75 0 0 0 1.38-.58 3 3 0 0 0-1.77-1.77.75.75 0 1 0-.5 1.41ZM3 11.25a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5Zm13.25.75a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .41-.34.75-.75.75ZM4.6 14.55a1.5 1.5 0 0 0 .94.88.75.75 0 0 1-.58 1.38 3 3 0 0 1-1.77-1.77.75.75 0 1 1 1.41-.49Zm9.95.85a1.5 1.5 0 0 0 .88-.94.75.75 0 0 1 1.38.58 3 3 0 0 1-1.77 1.77.75.75 0 1 1-.5-1.41Zm-3.8-9.15a.75.75 0 0 0-1.5 0v3h-3a.75.75 0 0 0 0 1.5h3v3a.75.75 0 0 0 1.5 0v-3h3a.75.75 0 0 0 0-1.5h-3v-3Z"
  }
});