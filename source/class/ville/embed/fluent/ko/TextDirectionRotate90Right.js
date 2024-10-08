/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ko.TextDirectionRotate90Right",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15.85 14.15c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L13 15.29V13.5a.5.5 0 0 1 1 0v1.8l1.15-1.15c.2-.2.5-.2.7 0Zm-8 0c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L5 15.29V3.5a.5.5 0 0 1 1 0v11.8l1.15-1.15c.2-.2.5-.2.7 0ZM18 9.5a.5.5 0 0 1-.5.5H14v1.5a.5.5 0 0 1-1 0V10H9.5a.5.5 0 0 1 0-1h8c.28 0 .5.22.5.5ZM16.5 3c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5h-1.25c-1.05 0-2.35-.2-3.4-.88A4.04 4.04 0 0 1 10 3.5a.5.5 0 0 1 1 0c0 1.43.6 2.27 1.4 2.78.82.53 1.9.72 2.85.72H16V3.5c0-.28.22-.5.5-.5Z",
    FILLED : "M5.75 3a.75.75 0 0 0-.75.75v10.69l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2c.3.3.77.3 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V3.75A.75.75 0 0 0 5.75 3Zm8 10a.75.75 0 0 0-.75.75v.69l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72v-.69a.75.75 0 0 0-.75-.75Zm3.5-2.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0 0 1.5H13v.75a.75.75 0 0 0 1.5 0v-.75h2.75Zm-1-7.5c.41 0 .75.34.75.75v3.5c0 .39-.3.72-.69.75-1.17.1-2.7.04-3.96-.53a3.96 3.96 0 0 1-1.68-1.35A4.1 4.1 0 0 1 10 3.75a.75.75 0 0 1 1.5 0c0 .68.17 1.17.41 1.52.25.36.6.63 1.05.84.74.32 1.66.44 2.54.43V3.75c0-.41.34-.75.75-.75Z"
  }
});