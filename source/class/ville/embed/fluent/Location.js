/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Location",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm2.95 4.96a7 7 0 1 0-9.9 0l1.52 1.5 2.04 1.98.14.12a2 2 0 0 0 2.64-.12l2.43-2.37 1.13-1.12Zm-9.2-9.2a6 6 0 0 1 8.67 8.3l-.18.19-1.32 1.3-2.23 2.17-.09.08a1 1 0 0 1-1.2 0l-.1-.08-2.97-2.9-.58-.57-.17-.18a6 6 0 0 1 .17-8.31Z",
    FILLED : "M14.95 13.96a7 7 0 1 0-9.9 0l1.52 1.5 2.04 1.98.14.12a2 2 0 0 0 2.64-.12l2.43-2.37 1.13-1.12ZM10 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
  }
});