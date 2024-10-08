/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Remote",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.15 14.85a.5.5 0 0 0 .7-.7L12.21 8.5l5.64-5.65a.5.5 0 0 0-.7-.7l-6 6a.5.5 0 0 0 0 .7l6 6Zm-14.3-9.7a.5.5 0 1 0-.7.7l5.64 5.65-5.64 5.65a.5.5 0 0 0 .7.7l6-6a.5.5 0 0 0 0-.7l-6-6Z",
    FILLED : "M16.97 15.03a.75.75 0 1 0 1.06-1.06L12.56 8.5l5.47-5.47a.75.75 0 0 0-1.06-1.06l-6 6c-.3.3-.3.77 0 1.06l6 6ZM3.03 4.97a.75.75 0 0 0-1.06 1.06l5.47 5.47-5.47 5.47a.75.75 0 1 0 1.06 1.06l6-6c.3-.3.3-.77 0-1.06l-6-6Z"
  }
});