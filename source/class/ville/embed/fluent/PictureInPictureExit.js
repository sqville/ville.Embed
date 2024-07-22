/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PictureInPictureExit",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 9c.83 0 1.5-.67 1.5-1.5v-4C10 2.67 9.33 2 8.5 2h-6C1.67 2 1 2.67 1 3.5v4c0 .65.42 1.2 1 1.41l.02.01c.15.05.31.08.48.08h6Zm6.75-3H11V5h4.25A2.75 2.75 0 0 1 18 7.75v6.5A2.75 2.75 0 0 1 15.25 17H4.75A2.75 2.75 0 0 1 2 14.25v-4.3c.16.03.33.05.5.05H3v4.25c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75v-6.5C17 6.78 16.22 6 15.25 6ZM14 12.3l-2.65-2.65a.5.5 0 0 0-.7.7L13.29 13H11.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.8Z",
    FILLED : "M8.5 9c.83 0 1.5-.67 1.5-1.5v-4C10 2.67 9.33 2 8.5 2h-6C1.67 2 1 2.67 1 3.5v4A1.5 1.5 0 0 0 2.5 9h6Zm0 1h-6c-.17 0-.34-.02-.5-.05v4.3A2.75 2.75 0 0 0 4.75 17h10.5A2.75 2.75 0 0 0 18 14.25v-6.5A2.75 2.75 0 0 0 15.25 5H11v2.5A2.5 2.5 0 0 1 8.5 10Zm3.85.65L15 13.29V11.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h1.8l-2.65-2.65a.5.5 0 0 1 .7-.7Z"
  }
});