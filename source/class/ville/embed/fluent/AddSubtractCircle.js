/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AddSubtractCircle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11 12.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-3-7a.5.5 0 0 0-1 0v1H6a.5.5 0 1 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 1 0 0-1H8v-1ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1a6.97 6.97 0 0 1-4.58-1.7l9.87-9.88A7 7 0 0 1 10 17Zm-5.3-2.42a7 7 0 0 1 9.87-9.87l-9.86 9.87Z",
    FILLED : "M11.5 12a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1a6.97 6.97 0 0 1-4.58-1.7l9.87-9.88A7 7 0 0 1 10 17ZM5.5 7c0-.28.22-.5.5-.5h1v-1a.5.5 0 0 1 1 0v1h1a.5.5 0 1 1 0 1H8v1a.5.5 0 0 1-1 0v-1H6a.5.5 0 0 1-.5-.5Z"
  }
});