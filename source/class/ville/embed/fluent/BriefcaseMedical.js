/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BriefcaseMedical",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.75 3h2.5c.41 0 .75.34.75.75V5H8V3.75c0-.41.34-.75.75-.75ZM7 3.75V5H5.5A2.5 2.5 0 0 0 3 7.5v6A2.5 2.5 0 0 0 5.5 16h9a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 14.5 5H13V3.75C13 2.78 12.22 2 11.25 2h-2.5C7.78 2 7 2.78 7 3.75ZM14.5 6c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 13.5v-6C4 6.67 4.67 6 5.5 6h9ZM10 7.5c.28 0 .5.22.5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2V8c0-.28.22-.5.5-.5Z",
    FILLED : "M7 5V3.75C7 2.78 7.78 2 8.75 2h2.5c.97 0 1.75.78 1.75 1.75V5h1.5A2.5 2.5 0 0 1 17 7.5v6a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 13.5v-6A2.5 2.5 0 0 1 5.5 5H7Zm1 0h4V3.75a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75V5Zm2.5 3a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2V8Z"
  }
});