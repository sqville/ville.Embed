/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Transmission",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2a2 2 0 0 0-.5 3.94.5.5 0 0 0 0 .06v3.5a.5.5 0 0 0 1 0V6a.5.5 0 0 0 0-.06A2 2 0 0 0 10 2ZM9 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM4 4a1 1 0 0 0-1 1v11a1 1 0 1 0 2 0v-4c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v4a1 1 0 1 0 2 0v-3.5c0-.28.22-.5.5-.5h5a.5.5 0 0 0 .5-.5V5a1 1 0 1 0-2 0v4a.5.5 0 0 1-.5.5H12a.5.5 0 0 1 0-1h2V5a2 2 0 1 1 4 0v6.5c0 .83-.67 1.5-1.5 1.5H12v3a2 2 0 1 1-4 0v-3.5H6V16a2 2 0 1 1-4 0V5a2 2 0 1 1 4 0v3.5h2a.5.5 0 0 1 0 1H5.5A.5.5 0 0 1 5 9V5a1 1 0 0 0-1-1Z",
    FILLED : "M10 2a2 2 0 0 0-.5 3.94V9.5a.5.5 0 0 0 1 0V5.94A2 2 0 0 0 10 2ZM3 5a1 1 0 0 1 2 0v4c0 .28.22.5.5.5H8a.5.5 0 0 0 0-1H6V5a2 2 0 1 0-4 0v11a2 2 0 1 0 4 0v-3.5h2V16a2 2 0 1 0 4 0v-3h4.5c.83 0 1.5-.67 1.5-1.5V5a2 2 0 1 0-4 0v3.5h-2a.5.5 0 0 0 0 1h2.5A.5.5 0 0 0 15 9V5a1 1 0 1 1 2 0v6.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 0-.5.5V16a1 1 0 1 1-2 0v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4a1 1 0 1 1-2 0V5Z"
  }
});