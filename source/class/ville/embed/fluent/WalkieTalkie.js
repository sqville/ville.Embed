/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WalkieTalkie",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.5 6a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5ZM8 9V7h4v2H8Z",
    FILLED : "M8 7v2h4V7H8Z"
  }
});