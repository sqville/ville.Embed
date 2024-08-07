/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LineDashes",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16.85 3.85a.5.5 0 0 0-.7-.7l-1 1a.5.5 0 0 0 .7.7l1-1Zm-3 2.3c.2.2.2.5 0 .7l-1 1a.5.5 0 0 1-.7-.7l1-1c.2-.2.5-.2.7 0Zm-3 3c.2.2.2.5 0 .7l-1 1a.5.5 0 0 1-.7-.7l1-1c.2-.2.5-.2.7 0Zm-3 3c.2.2.2.5 0 .7l-1 1a.5.5 0 0 1-.7-.7l1-1c.2-.2.5-.2.7 0Zm-3 3.7a.5.5 0 0 0-.7-.7l-1 1a.5.5 0 0 0 .7.7l1-1Z",
    FILLED : "M16.78 4.28a.75.75 0 0 0-1.06-1.06l-.5.5a.75.75 0 0 0 1.06 1.06l.5-.5Zm-3 1.94c.3.3.3.77 0 1.06l-.5.5a.75.75 0 1 1-1.06-1.06l.5-.5c.3-.3.77-.3 1.06 0Zm-3 3c.3.3.3.77 0 1.06l-.5.5a.75.75 0 1 1-1.06-1.06l.5-.5c.3-.3.77-.3 1.06 0Zm-3 3c.3.3.3.77 0 1.06l-.5.5a.75.75 0 0 1-1.06-1.06l.5-.5c.3-.3.77-.3 1.06 0Zm-3 4.06a.75.75 0 1 0-1.06-1.06l-.5.5a.75.75 0 1 0 1.06 1.06l.5-.5Z"
  }
});