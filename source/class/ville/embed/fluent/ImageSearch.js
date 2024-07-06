/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ImageSearch",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 3a3 3 0 0 0-3 3v2.76c.3-.2.64-.38 1-.5V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8c0 .37-.1.72-.28 1.02l-4.67-4.59a1.5 1.5 0 0 0-1.7-.28c.16.29.3.6.41.91a.5.5 0 0 1 .59.09l4.66 4.58A2 2 0 0 1 14 16h-2.88l.44.44c.16.16.28.36.35.56H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm6.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm-4.2 6.6a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 0 0 .7-.7L8.3 14.6Zm-2.8.4a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
    FILLED : "M12.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8c0 .65-.2 1.25-.56 1.74l-5.39-5.3a1.5 1.5 0 0 0-1.7-.28A4.5 4.5 0 0 0 3 8.76V6Zm9.5 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-.59 8H14c.65 0 1.24-.2 1.73-.55l-5.38-5.3a.5.5 0 0 0-.58-.09 4.5 4.5 0 0 1-.2 3.38l2 2c.15.16.27.36.34.56Zm-3.6-2.4a3.5 3.5 0 1 0-.7.7l2.54 2.55a.5.5 0 0 0 .7-.7L8.3 14.6ZM5.5 15a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
  }
});