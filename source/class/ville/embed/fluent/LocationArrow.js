/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LocationArrow",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.93 3.36a1 1 0 0 0-1.3-1.3L2.65 7.47a1 1 0 0 0 .1 1.9l5.98 1.57a.5.5 0 0 1 .35.35l1.58 5.97a1 1 0 0 0 1.9.1l5.38-13.99ZM17 3 11.6 17l-1.57-5.97a1.5 1.5 0 0 0-1.07-1.07L3 8.39 17 3Z",
    FILLED : "M16.64 2.07a1 1 0 0 1 1.29 1.3l-5.38 13.99a1 1 0 0 1-1.9-.1l-1.58-5.98a.5.5 0 0 0-.35-.35L2.74 9.35a1 1 0 0 1-.1-1.9l14-5.38Z"
  }
});