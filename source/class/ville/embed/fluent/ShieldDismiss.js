/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShieldDismiss",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.85 7.15a.5.5 0 1 0-.7.7L9.29 10l-2.14 2.15a.5.5 0 0 0 .7.7L10 10.71l2.15 2.14a.5.5 0 0 0 .7-.7L10.71 10l2.14-2.15a.5.5 0 0 0-.7-.7L10 9.29 7.85 7.15Zm2.43-5.07a.5.5 0 0 0-.56 0 15.05 15.05 0 0 1-6.3 2.43A.5.5 0 0 0 3 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 0 0 .36 0C14.69 16.23 17 13.39 17 9.5V5a.5.5 0 0 0-.43-.5 15.05 15.05 0 0 1-6.3-2.42ZM4 5.43a15.97 15.97 0 0 0 5.6-2.08l.4-.25.4.25A15.97 15.97 0 0 0 16 5.43V9.5c0 3.4-1.97 5.86-6 7.46-4.03-1.6-6-4.07-6-7.46V5.43Z",
    FILLED : "M10.28 2.08c1.94 1.3 4.03 2.1 6.3 2.43A.5.5 0 0 1 17 5v4.5c0 3.9-2.3 6.73-6.82 8.47a.5.5 0 0 1-.36 0C5.31 16.23 3 13.39 3 9.5V5a.5.5 0 0 1 .43-.5 15.05 15.05 0 0 0 6.3-2.42.5.5 0 0 1 .55 0ZM8.03 6.97a.75.75 0 0 0-1.06 1.06L8.94 10l-1.97 1.97a.75.75 0 1 0 1.06 1.06L10 11.06l1.97 1.97a.75.75 0 1 0 1.06-1.06L11.06 10l1.97-1.97a.75.75 0 0 0-1.06-1.06L10 8.94 8.03 6.97Z"
  }
});