/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowEnterLeft",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m3.76 12 3.33 3.14a.5.5 0 0 1-.68.72l-4.25-4a.5.5 0 0 1 0-.72l4.25-4a.5.5 0 1 1 .68.72L3.76 11H15a2 2 0 0 0 2-2V4.5a.5.5 0 0 1 1 0V9a3 3 0 0 1-3 3H3.76Z",
    FILLED : "m4.64 12.5 2.87 2.7a.75.75 0 0 1-1.02 1.1l-4.25-4a.75.75 0 0 1 0-1.1l4.25-4A.75.75 0 1 1 7.5 8.3L4.64 11h10.11c.97 0 1.75-.78 1.75-1.75v-4.5a.75.75 0 0 1 1.5 0v4.5c0 1.8-1.46 3.25-3.25 3.25H4.65Z"
  }
});