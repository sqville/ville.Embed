/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LineThickness",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm0 10c0-.83.67-1.5 1.5-1.5h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 2 14.5ZM3 8a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H3Z",
    FILLED : "M2.75 4a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75ZM2 9.25C2 8.56 2.56 8 3.25 8h13.5a1.25 1.25 0 1 1 0 2.5H3.25C2.56 10.5 2 9.94 2 9.25Zm0 5.5c0-.97.78-1.75 1.75-1.75h12.5a1.75 1.75 0 1 1 0 3.5H3.75c-.97 0-1.75-.78-1.75-1.75Z"
  }
});