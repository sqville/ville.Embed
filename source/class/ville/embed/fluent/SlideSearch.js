/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SlideSearch",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 7a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm3.03 3.5a4.5 4.5 0 0 0-.68-1h6.65a.5.5 0 0 1 0 1H8.53Zm.47 2c0 .17 0 .34-.03.5h3.53a.5.5 0 0 0 0-1H8.97c.02.16.03.33.03.5Zm-6-6v1.76c-.36.12-.7.3-1 .5V6.5A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5h-5.38l-1-1h6.38c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-11C3.67 5 3 5.67 3 6.5ZM4.5 16c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 14.6A3.5 3.5 0 1 0 4.5 16Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
    FILLED : "M2 6.5A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5h-5.38l-1.56-1.56c.21-.44.36-.93.41-1.44h3.53a.5.5 0 0 0 0-1H8.97a4.47 4.47 0 0 0-.44-1.5h5.97a.5.5 0 0 0 0-1H7.85A4.49 4.49 0 0 0 2 8.76V6.5Zm3.5.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm-1 9c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 14.6A3.5 3.5 0 1 0 4.5 16Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
  }
});