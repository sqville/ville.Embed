/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowBetweenUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 18a.5.5 0 0 1-1 0v-.5c0-.83.67-1.5 1.5-1.5h10c.83 0 1.5.67 1.5 1.5v.5a.5.5 0 0 1-1 0v-.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v.5Zm5.5-3a.5.5 0 0 0 .5-.5V6.7l3.65 3.65a.5.5 0 0 0 .7-.7l-4.5-4.5a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 0 0 .7.7L9 6.71v7.79c0 .28.22.5.5.5ZM3 2.5C3 3.33 3.67 4 4.5 4h10c.83 0 1.5-.67 1.5-1.5V2a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5V2a.5.5 0 0 0-1 0v.5Z",
    FILLED : "M5 18.25a.75.75 0 0 1-1.5 0v-.5c0-.97.78-1.75 1.75-1.75h9c.97 0 1.75.78 1.75 1.75v.5a.75.75 0 0 1-1.5 0v-.5a.25.25 0 0 0-.25-.25h-9a.25.25 0 0 0-.25.25v.5ZM9.75 15c.41 0 .75-.34.75-.75V7.56l2.97 2.97a.75.75 0 1 0 1.06-1.06l-4.25-4.25a.75.75 0 0 0-1.06 0L4.97 9.47a.75.75 0 1 0 1.06 1.06L9 7.56v6.69c0 .41.34.75.75.75ZM3.5 2.25C3.5 3.22 4.28 4 5.25 4h9C15.22 4 16 3.22 16 2.25v-.5a.75.75 0 0 0-1.5 0v.5c0 .14-.11.25-.25.25h-9A.25.25 0 0 1 5 2.25v-.5a.75.75 0 0 0-1.5 0v.5Z"
  }
});