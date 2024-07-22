/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PollOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8 8.7 2.15 2.86a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-.13-.13A2 2 0 0 1 14 16v-1.3l-2-2V16a2 2 0 1 1-4 0V8.7Zm3 3-2-2V16a1 1 0 1 0 2 0v-4.3Zm4 4v.3a1 1 0 0 0 1.26.97L15 15.7ZM11 4v4.88l1 1V4a2 2 0 1 0-4 0v1.88l1 1V4a1 1 0 0 1 2 0Zm3 7.88 1 1V8a1 1 0 1 1 2 0v6.88l1 1V8a2 2 0 1 0-4 0v3.88ZM2 12a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0v-4Zm2-1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Z",
    FILLED : "M8 8.7V16a2 2 0 1 0 4 0v-3.3l2 2V16a2 2 0 0 0 3.02 1.72l.13.13a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7L8 8.71Zm6-.7v3.88l4 4V8a2 2 0 1 0-4 0ZM8 5.88l4 4V4a2 2 0 1 0-4 0v1.88ZM4 10a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-2-2Z"
  }
});