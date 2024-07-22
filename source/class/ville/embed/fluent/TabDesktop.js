/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TabDesktop",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM16 6v-.5c0-.83-.67-1.5-1.5-1.5H9v1.5c0 .28.22.5.5.5H16ZM8 4H5.5C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7H9.5A1.5 1.5 0 0 1 8 5.5V4Z",
    FILLED : "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V7H9.5A1.5 1.5 0 0 1 8 5.5V3H5.5ZM9 3v2.5c0 .28.22.5.5.5H17v-.5A2.5 2.5 0 0 0 14.5 3H9Z"
  }
});