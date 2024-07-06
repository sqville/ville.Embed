/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BoardSplit",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm1 4v4c0 1.1.9 2 2 2h5v-6H4Zm7-1V4H6a2 2 0 0 0-2 2v3h7Zm1 7h2a2 2 0 0 0 2-2v-1h-4v3Zm4-9V6a2 2 0 0 0-2-2h-2v3h4Zm0 1h-4v4h4V8Z",
    FILLED : "M6 3a3 3 0 0 0-3 3v3h8V3H6Zm5 7H3v4a3 3 0 0 0 3 3h5v-7Zm3 7h-2v-4h5v1a3 3 0 0 1-3 3Zm3-5h-5V8h5v4Zm0-5h-5V3h2a3 3 0 0 1 3 3v1Z"
  }
});