/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Organization",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2a3 3 0 0 0-.5 5.96V9.5h-3c-.83 0-1.5.67-1.5 1.5v1.04a3 3 0 1 0 1 0V11c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1.04a3 3 0 1 0 1 0V11c0-.83-.67-1.5-1.5-1.5h-3V7.96A3 3 0 0 0 10 2ZM8 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM3.5 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm11-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z",
    FILLED : "M7 5a3 3 0 1 1 3.5 2.96V9.5h3c.83 0 1.5.67 1.5 1.5v1.04a3 3 0 1 1-1 0V11a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v1.04a3 3 0 1 1-1 0V11c0-.83.67-1.5 1.5-1.5h3V7.96A3 3 0 0 1 7 5Z"
  }
});