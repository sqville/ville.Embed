/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Stethoscope",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.5 2a.5.5 0 0 0-.5.5v5a4.5 4.5 0 0 0 4 4.47V13a5 5 0 0 0 10 0v-1.05a2.5 2.5 0 1 0-1 0V13a4 4 0 1 1-8 0v-1.03a4.5 4.5 0 0 0 4-4.47v-5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1H10v4.5a3.5 3.5 0 0 1-7 0V3h1.5a.5.5 0 0 0 0-1h-2Zm13 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z",
    FILLED : "M2.75 2a.75.75 0 0 0-.75.75v5a4.5 4.5 0 0 0 3.75 4.44v1.06a5.25 5.25 0 1 0 10.5 0v-1.1a2.75 2.75 0 1 0-1.5 0v1.1a3.75 3.75 0 1 1-7.5 0v-1.06A4.5 4.5 0 0 0 11 7.75v-5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h.75v4.25a3 3 0 1 1-6 0V3.5h.75a.75.75 0 0 0 0-1.5h-1.5ZM15.5 8.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
  }
});