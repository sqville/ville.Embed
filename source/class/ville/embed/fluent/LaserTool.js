/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LaserTool",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 2.5a.5.5 0 0 0-1 0V5a2 2 0 0 0 1 1.73v.77C4 8.33 4.67 9 5.5 9h4v3.5a.5.5 0 0 0 1 0V9h4c.83 0 1.5-.67 1.5-1.5v-.77A2 2 0 0 0 17 5V2.5a.5.5 0 0 0-1 0V5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2.5ZM5 7h10v.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7Z",
    FILLED : "M3.5 2a.5.5 0 0 0-.5.5V5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2.5a.5.5 0 0 0-.5-.5h-13Z"
  }
});