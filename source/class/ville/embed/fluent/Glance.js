/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Glance",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 3C3.67 3 3 3.67 3 4.5v5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-5C9 3.67 8.33 3 7.5 3h-3ZM4 4.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5ZM12.5 9c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-3Zm-.5 1.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5Zm-1-6c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 11 5.5v-1Zm1.5-.5a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-3Zm-8 9c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-3ZM4 14.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1Z",
    FILLED : "M3 14.5v1c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5Zm0-10v5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-5C9 3.67 8.33 3 7.5 3h-3C3.67 3 3 3.67 3 4.5Zm8 0v1c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5ZM12.5 9c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-3Z"
  }
});