/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowStepIn",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-14c.28 0 .5.22.5.5v7.8l3.15-3.15a.5.5 0 0 1 .7.7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7l3.15 3.14V2.5c0-.28.22-.5.5-.5Z",
    FILLED : "M12 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM10 2c.28 0 .5.22.5.5v7.8l3.15-3.15a.5.5 0 0 1 .7.7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7l3.15 3.14V2.5c0-.28.22-.5.5-.5Z"
  }
});