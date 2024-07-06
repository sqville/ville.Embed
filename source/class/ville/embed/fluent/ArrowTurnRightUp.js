/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowTurnRightUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16.85 8.85a.5.5 0 0 0 0-.7l-4-4a.5.5 0 0 0-.7 0l-4 4a.5.5 0 1 0 .7.7L12 5.71V12a2 2 0 0 1-2 2H3.5a.5.5 0 0 0 0 1H10a3 3 0 0 0 3-3V5.7l3.15 3.15c.2.2.5.2.7 0Z",
    FILLED : "M16.78 9.28c.3-.3.3-.77 0-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 1.06 1.06l2.72-2.72V13c0 .83-.67 1.5-1.5 1.5H3.75a.75.75 0 0 0 0 1.5H10a3 3 0 0 0 3-3V6.56l2.72 2.72c.3.3.77.3 1.06 0Z"
  }
});