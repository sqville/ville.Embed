/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Battery7",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.5 5A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9Zm.25.95H4.5c-.65 0-1.4.5-1.5 1.13v5.62c0 .64.5 1.17 1.12 1.23l.13.01h9.5c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24h-.13Zm-8.92 1h5.33c.43 0 .78.32.83.73l.01.1v4.33c0 .43-.32.78-.73.83H4.83a.84.84 0 0 1-.82-.72l-.01-.1V7.77c0-.42.32-.77.73-.82l.1-.01h5.33-5.33Z",
    FILLED : "M4.83 6.95a.84.84 0 0 0-.83.83v4.33c0 .46.37.84.83.84h5.33c.47 0 .84-.38.84-.84V7.78a.84.84 0 0 0-.84-.83H4.83ZM2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5Z"
  }
});