/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AlignSpaceAroundVertical",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 4h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2ZM5 6v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Zm8-2a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1Zm-1 2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6Z",
    FILLED : "M7.5 16c.83 0 1.5-.67 1.5-1.5v-9C9 4.67 8.33 4 7.5 4h-2C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h2Zm7 0c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5h2Z"
  }
});