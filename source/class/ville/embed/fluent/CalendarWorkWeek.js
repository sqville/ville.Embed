/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalendarWorkWeek",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.5 6a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-7ZM7 9V7h6v2H7Zm10-3.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM5.5 4h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-9C4 4.67 4.67 4 5.5 4Z",
    FILLED : "M7 9V7h6v2H7Zm10-3.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM6.5 6h7c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Z"
  }
});