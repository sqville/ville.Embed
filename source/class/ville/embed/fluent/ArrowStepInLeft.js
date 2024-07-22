/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowStepInLeft",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM4 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm14 2a.5.5 0 0 1-.5.5H9.7l3.15 3.15a.5.5 0 0 1-.7.7l-4-4a.5.5 0 0 1 0-.7l4-4a.5.5 0 0 1 .7.7L9.71 9.5h7.79c.28 0 .5.22.5.5Z",
    FILLED : "M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm14-2a.5.5 0 0 1-.5.5H9.7l3.15 3.15a.5.5 0 0 1-.7.7l-4-4a.5.5 0 0 1 0-.7l4-4a.5.5 0 0 1 .7.7L9.71 9.5h7.79c.28 0 .5.22.5.5Z"
  }
});