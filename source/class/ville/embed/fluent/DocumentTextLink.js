/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentTextLink",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2h-3.34c.15-.31.25-.65.3-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v9H4V4Zm7.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5Zm2 8h-2.84a3.51 3.51 0 0 0-.71-1h3.55a.5.5 0 0 1 0 1Zm0-2h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1Zm-7-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3 4a2.5 2.5 0 0 0 0 5H4a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H4a.5.5 0 0 0 0-1h-.5ZM7 14a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H7a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H7Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    FILLED : "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5V13h2.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-6c.95 0 1.82.38 2.45 1h3.55a.5.5 0 0 1 0 1h-2.84a3.49 3.49 0 0 1 0 3h3.84c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5ZM6.5 10h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1ZM11 6.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5ZM3.5 14a2.5 2.5 0 0 0 0 5H4a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H4a.5.5 0 0 0 0-1h-.5ZM7 14a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H7a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H7Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z"
  }
});