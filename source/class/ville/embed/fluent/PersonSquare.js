/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonSquare",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm2.5 5h-5c-.83 0-1.5.67-1.5 1.5 0 1.12.46 2.01 1.21 2.61.74.6 1.74.89 2.79.89s2.05-.29 2.79-.89c.75-.6 1.21-1.5 1.21-2.61 0-.83-.67-1.5-1.5-1.5ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z",
    FILLED : "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm7-1a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm2.5 5h-5c-.83 0-1.5.67-1.5 1.5 0 1.12.46 2.01 1.21 2.61.74.6 1.74.89 2.79.89s2.05-.29 2.79-.89c.75-.6 1.21-1.5 1.21-2.61 0-.83-.67-1.5-1.5-1.5Z"
  }
});