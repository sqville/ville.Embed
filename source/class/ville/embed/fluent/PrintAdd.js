/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PrintAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm2 10v-3.1c.36-.18.7-.4 1-.66v3.76c0 .83-.67 1.5-1.5 1.5H15v1.5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 5 16.5V15H3.5A1.5 1.5 0 0 1 2 13.5v-5A2.5 2.5 0 0 1 4.5 6H5v-.5C5 4.67 5.67 4 6.5 4h2.7c-.08.32-.15.66-.18 1H6.5a.5.5 0 0 0-.5.5V6h3.02c.03.34.1.68.19 1H4.5C3.67 7 3 7.67 3 8.5v5c0 .28.22.5.5.5H5v-1.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5V14h1.5a.5.5 0 0 0 .5-.5ZM6.5 12a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-7Z",
    FILLED : "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm-.5 7.5c1.33 0 2.55-.47 3.5-1.26v3.76c0 .83-.67 1.5-1.5 1.5H15v1.5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 5 16.5V15H3.5A1.5 1.5 0 0 1 2 13.5v-5A2.5 2.5 0 0 1 4.5 6H5v-.5C5 4.67 5.67 4 6.5 4h2.7c-.08.32-.15.66-.18 1H6.5a.5.5 0 0 0-.5.5V6h3.02c.26 2.8 2.61 5 5.48 5ZM6 12.5v4c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5Z"
  }
});