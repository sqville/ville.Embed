/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookTemplate",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 3.5A2.5 2.5 0 0 1 4.5 1h9A2.5 2.5 0 0 1 16 3.5V6h-1V3.5c0-.83-.67-1.5-1.5-1.5h-9C3.67 2 3 2.67 3 3.5v9c0 .83.67 1.5 1.5 1.5H8v1H4.5A2.5 2.5 0 0 1 2 12.5v-9ZM5.5 6H11a3 3 0 0 0-2.24 1H5.5a.5.5 0 0 1 0-1Zm2.67 2H5.5a.5.5 0 0 0 0 1H8a3 3 0 0 1 .17-1ZM5.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM18 9a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h6.5a.5.5 0 0 0 0-1H11a1 1 0 0 1-1-1h7.5a.5.5 0 0 0 .5-.5V9Zm-8 7V9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v7h-7Z",
    FILLED : "M4.5 1A2.5 2.5 0 0 0 2 3.5v9A2.5 2.5 0 0 0 4.5 15H8V9H5.5a.5.5 0 0 1 0-1h2.67a3 3 0 0 1 .6-1H5.5a.5.5 0 0 1 0-1H16V3.5A2.5 2.5 0 0 0 13.5 1h-9ZM5 4.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM18 9a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h6.5a.5.5 0 0 0 0-1H11a1 1 0 0 1-1-1h7.5a.5.5 0 0 0 .5-.5V9Zm-8 7V9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v7h-7Z"
  }
});