/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowTurnUpLeft",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.85 3.15a.5.5 0 0 0-.7 0l-4 4a.5.5 0 0 0 0 .7l4 4a.5.5 0 0 0 .7-.7L5.71 8H12a2 2 0 0 1 2 2v6.5a.5.5 0 0 0 1 0V10a3 3 0 0 0-3-3H5.7l3.15-3.15a.5.5 0 0 0 0-.7Z",
    FILLED : "M9.28 3.22a.75.75 0 0 0-1.06 0l-4 4c-.3.3-.3.77 0 1.06l4 4a.75.75 0 0 0 1.06-1.06L6.56 8.5H13c.83 0 1.5.67 1.5 1.5v6.25a.75.75 0 0 0 1.5 0V10a3 3 0 0 0-3-3H6.56l2.72-2.72c.3-.3.3-.77 0-1.06Z"
  }
});