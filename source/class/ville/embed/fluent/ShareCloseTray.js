/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShareCloseTray",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 6a.5.5 0 0 0-.5.5v5.8l-1.65-1.65a.5.5 0 0 0-.7.7l2.5 2.5c.2.2.5.2.7 0l2.5-2.5a.5.5 0 0 0-.7-.7l-1.65 1.64V6.5A.5.5 0 0 0 10 6Zm-8 8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8Zm2 1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4Z",
    FILLED : "M4 16a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4Zm6-10a.5.5 0 0 0-.5.5v5.8l-1.65-1.65a.5.5 0 0 0-.7.7l2.5 2.5c.2.2.5.2.7 0l2.5-2.5a.5.5 0 0 0-.7-.7l-1.65 1.64V6.5A.5.5 0 0 0 10 6Z"
  }
});