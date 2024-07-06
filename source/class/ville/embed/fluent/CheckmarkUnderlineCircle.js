/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CheckmarkUnderlineCircle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0 1a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.85-11.85c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7L9.5 9.79l3.65-3.64c.2-.2.5-.2.7 0ZM7 13.5c0 .28.22.5.5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z",
    FILLED : "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.85-11.85c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7L9.5 9.79l3.65-3.64c.2-.2.5-.2.7 0ZM7.5 13h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1Z"
  }
});