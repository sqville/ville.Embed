/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CodeBlock",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm4.85 1.85a.5.5 0 1 0-.7-.7l-2.5 2.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7L6.71 10l2.14-2.15Zm3-.7a.5.5 0 0 0-.7.7L13.29 10l-2.14 2.15a.5.5 0 0 0 .7.7l2.5-2.5a.5.5 0 0 0 0-.7l-2.5-2.5Z",
    FILLED : "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm2.85 4.85L6.71 10l2.14 2.15a.5.5 0 0 1-.7.7l-2.5-2.5a.5.5 0 0 1 0-.7l2.5-2.5a.5.5 0 1 1 .7.7Zm3-.7 2.5 2.5c.2.2.2.5 0 .7l-2.5 2.5a.5.5 0 0 1-.7-.7L13.29 10l-2.14-2.15a.5.5 0 0 1 .7-.7Z"
  }
});