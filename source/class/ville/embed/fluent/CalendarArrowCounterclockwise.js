/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalendarArrowCounterclockwise",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 17A2.5 2.5 0 0 1 3 14.5v-4a.5.5 0 0 1 1 0v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7H6.5c0-.36-.14-.72-.4-1H16v-.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v1.8l.65-.65a.5.5 0 1 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 1 1 .7-.7l.65.64V5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9ZM8 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    FILLED : "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5V6H6.11A1.5 1.5 0 0 0 4 5.87V7.3l.65-.64a.5.5 0 1 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 1 1 .7-.7l.65.64V5.5ZM17 7v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5V9.92a1.5 1.5 0 0 0 1.55-.36l1.5-1.5c.3-.3.44-.68.44-1.06H17ZM7 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm4-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm4-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }
});