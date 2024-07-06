/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableChecker",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16 5.5V11h1V5.5A2.5 2.5 0 0 0 14.5 3H9v1h5.5c.83 0 1.5.67 1.5 1.5ZM3 9v5.5A2.5 2.5 0 0 0 5.5 17H11v-1H5.5A1.5 1.5 0 0 1 4 14.5V9H3Zm2.5-6H8v4h5v5h4v2.5a2.5 2.5 0 0 1-2.5 2.5H12v-4H7V8H3V5.5A2.5 2.5 0 0 1 5.5 3Zm9 13c.78 0 1.42-.6 1.5-1.36V13h-3v3h1.5ZM12 8H8v4h4V8ZM4 7h3V4H5.5c-.78 0-1.42.6-1.5 1.36V7Z",
    FILLED : "M7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm5 5H8v4h4V8Zm1 5h4v1.5a2.5 2.5 0 0 1-2.5 2.5H13v-4ZM8 4h6.5c.83 0 1.5.67 1.5 1.5V12h1V5.5A2.5 2.5 0 0 0 14.5 3H8v1ZM5.5 16H12v1H5.5A2.5 2.5 0 0 1 3 14.5V8h1v6.5c0 .83.67 1.5 1.5 1.5Z"
  }
});