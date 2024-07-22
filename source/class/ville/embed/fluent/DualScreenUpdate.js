/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DualScreenUpdate",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V5H4Zm12 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.5v10H16Zm-.15-3.15a.5.5 0 0 0-.7-.7L14 12.29V6.5a.5.5 0 0 0-1 0v5.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l2-2Z",
    FILLED : "M16 16h-5.5V4H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2ZM4 4h5.5v12H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Zm12.85 7.85a.5.5 0 0 0-.7-.7L15 12.29V6.5a.5.5 0 0 0-1 0v5.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l2-2Z"
  }
});