/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Highway",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 2.57a.5.5 0 0 0-1-.14l-2 15a.5.5 0 0 0 1 .14l2-15Zm9-.14a.5.5 0 0 0-1 .14l2 15a.5.5 0 0 0 1-.14l-2-15Zm-4.5.07a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Zm-1 9a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Zm0 3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3Z",
    FILLED : "M6 2.85a.75.75 0 0 0-1.5-.2l-2 14.5a.75.75 0 1 0 1.5.2l2-14.5Zm9.5-.2a.75.75 0 0 0-1.5.2l2 14.5a.75.75 0 0 0 1.5-.2l-2-14.5Zm-4.75.1a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Zm-1.5 8.5a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5Zm0 3.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0v-2.5Z"
  }
});