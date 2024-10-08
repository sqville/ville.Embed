/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SquareHint",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 3.5a.5.5 0 0 0-.5-.5A2.5 2.5 0 0 0 3 5.5a.5.5 0 0 0 1 0C4 4.67 4.67 4 5.5 4a.5.5 0 0 0 .5-.5ZM16.5 6a.5.5 0 0 0 .5-.5A2.5 2.5 0 0 0 14.5 3a.5.5 0 0 0 0 1c.83 0 1.5.67 1.5 1.5 0 .28.22.5.5.5Zm-2 11a.5.5 0 0 1 0-1c.83 0 1.5-.67 1.5-1.5a.5.5 0 0 1 1 0 2.5 2.5 0 0 1-2.5 2.5Zm-11-3a.5.5 0 0 0-.5.5A2.5 2.5 0 0 0 5.5 17a.5.5 0 0 0 0-1A1.5 1.5 0 0 1 4 14.5a.5.5 0 0 0-.5-.5ZM3 9a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V9Zm13.5-.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V9a.5.5 0 0 0-.5-.5Zm-8-5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5ZM9 16a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9Z",
    FILLED : "M9.25 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM3 10.75a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0v1.5Zm5.5 5.5c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm7-5.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0v1.5Zm-9.5-7A.75.75 0 0 0 5.25 3C4.01 3 3 4 3 5.25a.75.75 0 0 0 1.5 0c0-.41.34-.75.75-.75S6 4.16 6 3.75ZM5.25 17a.75.75 0 0 0 0-1.5.75.75 0 0 1-.75-.75.75.75 0 0 0-1.5 0C3 15.99 4 17 5.25 17ZM14 3.75c0-.41.34-.75.75-.75C15.99 3 17 4 17 5.25a.75.75 0 0 1-1.5 0 .75.75 0 0 0-.75-.75.75.75 0 0 1-.75-.75ZM14.75 17a.75.75 0 0 1 0-1.5c.41 0 .75-.34.75-.75a.75.75 0 0 1 1.5 0c0 1.24-1 2.25-2.25 2.25Z"
  }
});