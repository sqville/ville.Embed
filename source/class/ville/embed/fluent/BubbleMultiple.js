/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BubbleMultiple",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM12 4.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM3 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-5a5 5 0 1 0 0 10A5 5 0 0 0 7 5Zm5.5 13a3.5 3.5 0 0 1-3.33-2.4c.32-.13.63-.28.91-.45A2.5 2.5 0 1 0 12.66 12c.1-.31.2-.64.25-.98A3.5 3.5 0 0 1 12.5 18ZM7.67 7.2a.5.5 0 1 0-.34.94 2.5 2.5 0 0 1 1.53 1.53.5.5 0 1 0 .94-.34A3.5 3.5 0 0 0 7.67 7.2Z",
    FILLED : "M19 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM9.17 15.6a3.5 3.5 0 1 0 3.74-4.58 6 6 0 0 1-3.74 4.57ZM12 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM7.03 7.5a.5.5 0 0 0 .3.64 2.5 2.5 0 0 1 1.53 1.53.5.5 0 1 0 .94-.34A3.5 3.5 0 0 0 7.67 7.2a.5.5 0 0 0-.64.3Z"
  }
});