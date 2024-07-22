/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableColumnTopBottom",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9Zm-13 9V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM14.5 16H13v-3h3V14.64A1.5 1.5 0 0 1 14.5 16ZM12 8v4H8V8h4Zm1 0h3v4h-3V8Zm0-4H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Z",
    FILLED : "M13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4v4Zm0-5V8h4v4h-4Zm-1 0H8V8h4v4Zm-4 4h4v1H8v-1Zm-1-4V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4ZM8 4h4V3H8v1ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Z"
  }
});