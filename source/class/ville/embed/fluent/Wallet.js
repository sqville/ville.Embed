/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Wallet",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.5 11a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM3 4.5C3 3.67 3.67 3 4.5 3H14a2 2 0 0 1 2 2v.27c.6.34 1 .99 1 1.73v8a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 14.5v-10ZM14 4H4.5a.5.5 0 0 0 0 1H15a1 1 0 0 0-1-1ZM4.5 6a1.5 1.5 0 0 1-.5-.09v8.59c0 .83.67 1.5 1.5 1.5H15a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4.5Z",
    FILLED : "M4.5 3C3.67 3 3 3.67 3 4.5v10A2.5 2.5 0 0 0 5.5 17H15a2 2 0 0 0 2-2V7a2 2 0 0 0-1-1.73V5a2 2 0 0 0-2-2H4.5ZM15 5H4.5a.5.5 0 0 1 0-1H14a1 1 0 0 1 1 1Zm-1.5 6h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Z"
  }
});