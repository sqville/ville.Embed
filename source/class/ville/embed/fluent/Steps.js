/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Steps",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11 3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4h-1V3h-3v3a1 1 0 0 1-1 1H8v3a1 1 0 0 1-1 1H4v3h4v1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3V7a1 1 0 0 1 1-1h3V3Zm3 5a1 1 0 0 0-1 1v3h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5.5a2.5 2.5 0 0 0 2.5-2.5V9a1 1 0 0 0-1-1h-3Zm0 1h3v5.5c0 .83-.67 1.5-1.5 1.5H10v-3h3a1 1 0 0 0 1-1V9Z",
    FILLED : "M11 3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4h-1V3h-3v3a1 1 0 0 1-1 1H8v3a1 1 0 0 1-1 1H4v3h4v1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3V7a1 1 0 0 1 1-1h3V3Zm2 6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 1-2.5 2.5H10a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3V9Z"
  }
});