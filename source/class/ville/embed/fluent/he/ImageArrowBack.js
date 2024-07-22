/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.he.ImageArrowBack",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M1 6.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0Zm6.65-2.15a.5.5 0 1 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 1 1-.7-.7L8.29 6H6.25C5.01 6 4 7 4 8.25v.25a.5.5 0 0 1-1 0v-.25C3 6.45 4.46 5 6.25 5h2.04l-.64-.65ZM3 11.98c.46.3.97.53 1.5.7v5.07c0 .2.04.4.1.6l5.83-5.7a2.25 2.25 0 0 1 3.02-.12l.12.11 5.83 5.7c.06-.18.1-.38.1-.59V6.25c0-.97-.78-1.75-1.75-1.75h-5.06a6.47 6.47 0 0 0-.71-1.5h5.77C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75v-5.77Zm15.33 7.42-5.8-5.69a.75.75 0 0 0-.97-.07l-.08.07-5.81 5.7c.18.06.38.09.58.09h11.5c.2 0 .4-.03.58-.1ZM15.25 6.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Zm0 1.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z",
    FILLED : "M1 6.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0Zm6.65-2.15a.5.5 0 1 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 1 1-.7-.7L8.29 6H6.25C5.01 6 4 7 4 8.25v.25a.5.5 0 0 1-1 0v-.25C3 6.45 4.46 5 6.25 5h2.04l-.64-.65Zm8.1 3.15a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM13 6.5a6.5 6.5 0 0 1-10 5.48v5.77c0 .63.18 1.21.49 1.7l6.93-6.8.14-.13c.83-.7 2.05-.7 2.89.01l.13.12 6.93 6.8c.31-.49.49-1.07.49-1.7V6.25C21 4.45 19.54 3 17.75 3h-5.77A6.47 6.47 0 0 1 13 6.5Zm2.75-.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Zm-4.28 7.72.09-.07c.26-.2.61-.2.87-.01l.1.08 6.92 6.8c-.5.3-1.08.48-1.7.48H6.25c-.62 0-1.2-.18-1.7-.48l6.92-6.8Z"
  },

  properties :
  {
    viewBox :
    {
      refine : true,
      init : "0 0 24 24"
    }
  }
});