/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableCellEdit",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.98 13c.1-.12.19-.23.3-.33l.66-.67H8V8h4v2.94l1-1V8h1.94l.16-.16c.26-.26.55-.45.86-.6A2 2 0 0 0 15 7H5a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h4.98ZM7 8v4H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2Zm8.8.55-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z",
    FILLED : "M8 13h1.98c.1-.12.19-.23.3-.33L12 10.94V7H8v6Zm7.1-5.16c.26-.26.55-.45.86-.6A2 2 0 0 0 15 7h-2v2.94l2.1-2.1ZM5 13a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h2v6H5Zm10.8-4.45-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z"
  }
});