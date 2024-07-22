/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DualScreenClosedAlert",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.5 5a3 3 0 0 1 6 0v2l1.32 1.12a.5.5 0 0 1-.32.88h-8a.5.5 0 0 1-.32-.88L10.5 7V5Zm3 6a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1ZM6 6h3.5V5H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a2 2 0 0 0 2-2v-3.05a2.52 2.52 0 0 1-1 0V15a1 1 0 0 1-1 1H6V6Z",
    FILLED : "M10.5 5a3 3 0 0 1 6 0v2l1.32 1.12a.5.5 0 0 1-.32.88h-8a.5.5 0 0 1-.32-.88L10.5 7V5Zm3 6a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1Zm-4-4.46-.97.82A1.5 1.5 0 0 0 9.5 10h1.52l.12.33A2.5 2.5 0 0 0 14 11.95V15a2 2 0 0 1-2 2H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3.5v1.54Z"
  }
});