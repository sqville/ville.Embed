/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableOffset",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9ZM16 12H8V8h8v4Zm-3 1h3v1.5c0 .83-.67 1.5-1.5 1.5H13v-3Zm-1 0v3H5.5A1.5 1.5 0 0 1 4 14.5V13h8Zm-8-1V8h3v4H4Zm0-5V5.5C4 4.67 4.67 4 5.5 4H12v3H4Zm12-1.5V7h-3V4h1.5c.83 0 1.5.67 1.5 1.5Z",
    FILLED : "M5.5 3H12v4H3V5.5A2.5 2.5 0 0 1 5.5 3ZM8 8h9v4H8V8Zm-1 4V8H3v4h4Zm-4 1h9v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10 0v4h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4Zm0-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Z"
  }
});