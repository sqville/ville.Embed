/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PuzzleCube",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 14.5V7h4V3h7.5A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5ZM8 4v3h4V4H8Zm5 0v3h3V5.5c0-.83-.67-1.5-1.5-1.5H13Zm3 4h-3v4h3V8Zm0 5h-3v3h1.5c.83 0 1.5-.67 1.5-1.5V13Zm-4 3v-3H8v3h4Zm-5 0v-3H4v1.5c0 .83.67 1.5 1.5 1.5H7Zm-3-4h3V8H4v4Zm8-4H8v4h4V8Z",
    FILLED : "M13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4v4Zm0-5V8h4v4h-4Zm-1 0H8V8h4v4Zm-4 1h4v4H8v-4Zm-1-1V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4Z"
  }
});