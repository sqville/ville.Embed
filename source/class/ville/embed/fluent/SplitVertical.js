/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SplitVertical",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0v-15ZM4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h4v-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4V4H4Zm7 0v1h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4Z",
    FILLED : "M10 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0v-15ZM2 6c0-1.1.9-2 2-2h4v12H4a2 2 0 0 1-2-2V6Zm9 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v12Z"
  }
});