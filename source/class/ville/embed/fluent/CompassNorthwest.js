/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CompassNorthwest",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM6.1 7.42A1 1 0 0 1 7.42 6.1l3.26 1.48a3.5 3.5 0 0 1 1.74 1.74l1.48 3.26a1 1 0 0 1-1.32 1.32l-3.26-1.48a3.5 3.5 0 0 1-1.74-1.74L6.1 7.42Zm4.17 1.07L7 7.01l1.48 3.26c.25.55.7.99 1.24 1.24L13 12.99l-1.48-3.26c-.25-.55-.7-.99-1.24-1.24Z",
    FILLED : "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.51-10.13a3 3 0 0 1 1.65 1.6l1.6 3.74c.14.35-.2.7-.55.55l-3.73-1.6a3 3 0 0 1-1.6-1.65l-1.4-3.48a.42.42 0 0 1 .54-.55l3.49 1.4Z"
  }
});