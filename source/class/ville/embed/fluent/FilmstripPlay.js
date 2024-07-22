/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FilmstripPlay",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4h-11ZM3 6.5C3 5.67 3.67 5 4.5 5h11c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 13.5v-7ZM15.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Zm-.5 6.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm.5-3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5ZM4 6.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm.5 5.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5ZM4 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm4-1.37c0-.49.46-.79.83-.54l2.94 1.95c.3.2.3.72 0 .92l-2.94 1.95c-.37.25-.83-.05-.83-.54V8.13Z",
    FILLED : "M5 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5Zm10.5 2c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm-.5 6.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm.5-3.5c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5ZM4 6.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm.5 5.5c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5ZM4 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm4-1.37c0-.49.46-.79.83-.54l2.94 1.95c.3.2.3.72 0 .92l-2.94 1.95c-.37.25-.83-.05-.83-.54V8.13Z"
  }
});