/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SlideTransition",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4H4.75ZM12 5v10H9V5h3Zm1 10V5h2.25c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75H13Zm-5 0H6V5h2v10ZM5 5v10h-.25C3.78 15 3 14.22 3 13.25v-6.5C3 5.78 3.78 5 4.75 5H5Z",
    FILLED : "M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25v-6.5ZM6 5H5v10h1V5Zm3 0H8v10h1V5Zm3 0v10h1V5h-1Z"
  }
});