/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ServerLink",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM7 12.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7-8V13h1V4.5A2.5 2.5 0 0 0 12.5 2h-5A2.5 2.5 0 0 0 5 4.5v11A2.5 2.5 0 0 0 7.5 18h1.84a3.48 3.48 0 0 1-.3-1H7.5A1.5 1.5 0 0 1 6 15.5v-11C6 3.67 6.67 3 7.5 3h5c.83 0 1.5.67 1.5 1.5ZM9.34 15c.17-.37.42-.71.71-1H7.5a.5.5 0 0 0 0 1h1.84Zm3.16-1a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z",
    FILLED : "M7.5 2A2.5 2.5 0 0 0 5 4.5v11A2.5 2.5 0 0 0 7.5 18h1.84a3.49 3.49 0 0 1 0-3H7.5a.5.5 0 0 1 0-1h2.55c.63-.62 1.5-1 2.45-1H15V4.5A2.5 2.5 0 0 0 12.5 2h-5Zm5 11h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1ZM7 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm5.5 8.5a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z"
  }
});