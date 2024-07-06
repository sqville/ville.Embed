/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BinRecycleFull",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.2 2c.06 0 .11.02.15.06L8.3 4H6V2.2c0-.1.1-.2.2-.2ZM5 2.2V4H4a.5.5 0 0 0-.5.56l1.35 11.67A2 2 0 0 0 6.84 18h6.32a2 2 0 0 0 1.99-1.77L16.5 4.56A.5.5 0 0 0 16 4h-1V2.5c0-.83-.67-1.5-1.5-1.5h-3C9.67 1 9 1.67 9 2.5v.8L7.06 1.34A1.2 1.2 0 0 0 5 2.21ZM10 4V2.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V4h-4ZM4.56 5h10.88l-1.28 11.11a1 1 0 0 1-1 .89H6.84a1 1 0 0 1-1-.89L4.56 5Zm6.74 2.75c-.58-1-2.02-1-2.6 0l-.45.78a.5.5 0 0 0 .87.5l.45-.78a.5.5 0 0 1 .86 0l.45.78a.5.5 0 0 0 .87-.5l-.45-.78Zm.86 3.5-.1-.19a.5.5 0 0 1 .86-.5l.11.19a1.5 1.5 0 0 1-1.3 2.25H11a.5.5 0 0 1 0-1h.73a.5.5 0 0 0 .43-.75ZM9 12a.5.5 0 0 1 0 1h-.73a1.5 1.5 0 0 1-1.3-2.25l.1-.19a.5.5 0 0 1 .87.5l-.1.19a.5.5 0 0 0 .43.75H9Z",
    FILLED : "M6 2.2V4h2.3L6.34 2.06a.2.2 0 0 0-.35.15ZM5 4V2.2a1.2 1.2 0 0 1 2.06-.85L9 3.3V2.5c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5V4h1a.5.5 0 0 1 .5.56l-1.35 11.67A2 2 0 0 1 13.16 18H6.84a2 2 0 0 1-1.99-1.77L3.5 4.56A.5.5 0 0 1 4 4h1Zm9 0V2.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V4h4Zm-2.7 3.75c-.58-1-2.02-1-2.6 0l-.45.78a.5.5 0 1 0 .87.5l.45-.78a.5.5 0 0 1 .86 0l.45.78a.5.5 0 0 0 .87-.5l-.45-.78Zm.86 3.5a.5.5 0 0 1-.43.75H11a.5.5 0 0 0 0 1h.73a1.5 1.5 0 0 0 1.3-2.25l-.1-.19a.5.5 0 0 0-.87.5l.1.19ZM9 12h-.73a.5.5 0 0 1-.44-.75l.11-.19a.5.5 0 0 0-.86-.5l-.11.19A1.5 1.5 0 0 0 8.27 13H9a.5.5 0 0 0 0-1Z"
  }
});