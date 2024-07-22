/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Step",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a3 3 0 0 1-3 3H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4V8a1 1 0 0 1 1-1h4V3Zm5 0h-4v4a1 1 0 0 1-1 1H8v4a1 1 0 0 1-1 1H3v4h12a2 2 0 0 0 2-2V3Z",
    FILLED : "M13 2a1 1 0 0 0-1 1v4H8a1 1 0 0 0-1 1v4H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12a3 3 0 0 0 3-3V3a1 1 0 0 0-1-1h-4Z"
  }
});