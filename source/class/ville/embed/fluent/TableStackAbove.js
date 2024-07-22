/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableStackAbove",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5ZM4 13v2a1 1 0 0 0 1 1h2v-3H4Zm8 3v-3H8v3h4Zm1 0h2a1 1 0 0 0 1-1v-2h-3v3Zm0-4h3V9h-3v3Zm-1-3H8v3h4V9ZM4 9v3h3V9H4Z",
    FILLED : "M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM15 17h-2v-4h4v2a2 2 0 0 1-2 2Zm2-5h-4V8h3.5c.28 0 .5.22.5.5V12Zm-5 0V8H8v4h4Zm-4 5h4v-4H8v4ZM7 8v4H3V8.5c0-.28.22-.5.5-.5H7Zm0 9H5a2 2 0 0 1-2-2v-2h4v4Z"
  }
});