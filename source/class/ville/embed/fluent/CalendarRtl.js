/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalendarRtl",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM16 7H4v7.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7Zm-1.5-3h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Z",
    FILLED : "M14.5 3A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9ZM3 7h14v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5V7Zm9 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-4a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-4a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
  }
});