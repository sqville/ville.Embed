/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowTurnRightDown",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16.85 11.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 0 1 .7-.7L12 14.29V8a2 2 0 0 0-2-2H3.5a.5.5 0 0 1 0-1H10a3 3 0 0 1 3 3v6.3l3.15-3.15c.2-.2.5-.2.7 0Z",
    FILLED : "M16.78 10.72c.3.3.3.77 0 1.06l-4 4c-.3.3-.77.3-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V7c0-.83-.67-1.5-1.5-1.5H3.75a.75.75 0 0 1 0-1.5H10a3 3 0 0 1 3 3v6.44l2.72-2.72c.3-.3.77-.3 1.06 0Z"
  }
});