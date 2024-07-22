/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowTurnLeftDown",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3.15 11.15a.5.5 0 0 0 0 .7l4 4c.2.2.5.2.7 0l4-4a.5.5 0 0 0-.7-.7L8 14.29V8c0-1.1.9-2 2-2h6.5a.5.5 0 0 0 0-1H10a3 3 0 0 0-3 3v6.3l-3.15-3.15a.5.5 0 0 0-.7 0Z",
    FILLED : "M3.22 10.72c-.3.3-.3.77 0 1.06l4 4c.3.3.77.3 1.06 0l4-4a.75.75 0 1 0-1.06-1.06L8.5 13.44V7c0-.83.67-1.5 1.5-1.5h6.25a.75.75 0 0 0 0-1.5H10a3 3 0 0 0-3 3v6.44l-2.72-2.72a.75.75 0 0 0-1.06 0Z"
  }
});