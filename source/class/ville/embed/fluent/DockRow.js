/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DockRow",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 4c-.83 0-1.5.67-1.5 1.5v2C1.5 8.33 2.17 9 3 9h2c.83 0 1.5-.67 1.5-1.5v-2C6.5 4.67 5.83 4 5 4H3Zm-.5 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2A.5.5 0 0 1 5 8H3a.5.5 0 0 1-.5-.5v-2ZM3 10c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H3Zm-.5 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-2Zm5-6C7.5 4.67 8.17 4 9 4h2c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H9a1.5 1.5 0 0 1-1.5-1.5v-2ZM9 5a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 11 5H9Zm0 5c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H9Zm-.5 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5v-2Zm5-6c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-2ZM15 5a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 17 5h-2Zm0 5c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-2Zm-.5 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2Z",
    FILLED : "M3 4c-.83 0-1.5.67-1.5 1.5v2C1.5 8.33 2.17 9 3 9h2c.83 0 1.5-.67 1.5-1.5v-2C6.5 4.67 5.83 4 5 4H3Zm0 6c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H3Zm4.5-4.5C7.5 4.67 8.17 4 9 4h2c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H9a1.5 1.5 0 0 1-1.5-1.5v-2ZM9 10c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H9Zm4.5-4.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-2ZM15 10c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-2Z"
  }
});