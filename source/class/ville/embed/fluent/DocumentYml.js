/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentYml",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06v5.08c0-.65-.42-1.2-1-1.4V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v7.09c-.3.1-.56.3-.75.58l-.25.38V4Zm7.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5Zm-8 11a.5.5 0 0 0 .5-.5v-1.85l1.92-2.87a.5.5 0 0 0-.84-.56L3.5 14.6l-1.58-2.38a.5.5 0 0 0-.84.56L3 15.65v1.85c0 .28.22.5.5.5Zm4.45-5.72a.5.5 0 0 0-.95.22v5a.5.5 0 1 0 1 0v-2.88l1.55 3.1a.5.5 0 0 0 .9 0l1.55-3.1v2.88a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.95-.22L10 16.38l-2.05-4.1Zm7.05.22a.5.5 0 0 0-1 0v5c0 .28.22.5.5.5h3a.5.5 0 1 0 0-1H15v-4.5Z",
    FILLED : "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v8.55l.25-.38a1.5 1.5 0 0 1 2.25-.29 1.5 1.5 0 0 1 2.34.45L10 14.15l1.16-2.32a1.5 1.5 0 0 1 2.34-.45 1.5 1.5 0 0 1 2.5 1.09V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5ZM3.5 18a.5.5 0 0 0 .5-.5v-1.85l1.92-2.87a.5.5 0 0 0-.84-.56L3.5 14.6l-1.58-2.38a.5.5 0 0 0-.84.56L3 15.65v1.85c0 .28.22.5.5.5Zm4.45-5.72a.5.5 0 0 0-.95.22v5a.5.5 0 1 0 1 0v-2.88l1.55 3.1a.5.5 0 0 0 .9 0l1.55-3.1v2.88a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.95-.22L10 16.38l-2.05-4.1Zm7.05.22a.5.5 0 0 0-1 0v5c0 .28.22.5.5.5h3a.5.5 0 1 0 0-1H15v-4.5Z"
  }
});