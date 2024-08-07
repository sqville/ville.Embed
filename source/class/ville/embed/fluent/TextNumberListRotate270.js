/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextNumberListRotate270",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 11a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5Zm5 0a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5Zm5 0a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5Zm.5 3.75a.5.5 0 1 0 1 0c0-.34.1-.53.18-.63.09-.1.2-.13.3-.13.2.01.52.19.52.76 0 .41-.1.63-.17.72a.42.42 0 0 1-.07.1.5.5 0 0 0 .46.88h.01l.02-.02.04-.02.1-.08c.09-.07.18-.17.28-.3.18-.28.33-.7.33-1.28 0-1.03-.67-1.73-1.48-1.76-.37-.01-.74.12-1.02.4a1.37 1.37 0 0 0-1.02-.4c-.8.03-1.48.73-1.48 1.76 0 .59.15 1 .33 1.28a1.4 1.4 0 0 0 .42.4l.01.01h.01a.5.5 0 0 0 .48-.87.42.42 0 0 1-.08-.1c-.07-.1-.17-.3-.17-.72 0-.57.33-.75.52-.76.1 0 .21.04.3.13.08.1.18.29.18.63Zm-6.65 1.6a.5.5 0 0 1-.7 0h-.01v-.01a1.45 1.45 0 0 1-.11-.12A2.5 2.5 0 0 1 7 14.68c0-.38.1-.79.35-1.11A1.4 1.4 0 0 1 8.5 13c.55 0 .93.24 1.2.57a4.2 4.2 0 0 1 .56.96c.16.3.3.54.47.7.08.08.16.14.27.18V13.5a.5.5 0 1 1 1 0V16a.5.5 0 0 1-.5.5c-.62 0-1.08-.2-1.44-.52a3.32 3.32 0 0 1-.77-1.15 3.18 3.18 0 0 0-.35-.62.5.5 0 0 0-.44-.21c-.18 0-.28.07-.35.16a.93.93 0 0 0-.15.53 1.5 1.5 0 0 0 .35.95v.01c.2.2.2.5 0 .7Zm-7.34-1.97A.5.5 0 0 1 1.5 14h4a.5.5 0 1 1 0 1H2.92c.2.22.38.48.53.78a.5.5 0 1 1-.9.44 2.96 2.96 0 0 0-1.15-1.2 2.07 2.07 0 0 0-.12-.07.5.5 0 0 1-.27-.56Z",
    FILLED : "M4.75 11a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5c0 .41-.34.75-.75.75Zm5 0a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5c0 .41-.34.75-.75.75Zm5 0a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5c0 .41-.34.75-.75.75ZM1.01 14.38A.5.5 0 0 1 1.5 14h4a.5.5 0 1 1 0 1H2.92c.2.22.38.48.53.78a.5.5 0 1 1-.9.44 2.96 2.96 0 0 0-1.15-1.2 2.07 2.07 0 0 0-.12-.07.5.5 0 0 1-.27-.56Zm7.34 1.97a.5.5 0 0 1-.7 0h-.01v-.01a1.45 1.45 0 0 1-.11-.12A2.5 2.5 0 0 1 7 14.68c0-.38.1-.79.35-1.11A1.4 1.4 0 0 1 8.5 13c.55 0 .93.24 1.2.57.21.25.37.57.5.83l.06.13c.16.3.3.54.47.7.08.08.16.14.27.18V13.5a.5.5 0 1 1 1 0V16a.5.5 0 0 1-.5.5c-.62 0-1.08-.2-1.44-.52a3.32 3.32 0 0 1-.77-1.15 3.18 3.18 0 0 0-.35-.62.5.5 0 0 0-.44-.21c-.18 0-.28.07-.35.16a.93.93 0 0 0-.15.53 1.5 1.5 0 0 0 .35.95v.01c.2.2.2.5 0 .7Zm6.65-1.6a.5.5 0 1 0 1 0c0-.34.1-.53.18-.63.09-.1.2-.13.3-.13.2.01.52.19.52.76 0 .41-.1.63-.17.72a.42.42 0 0 1-.07.1.5.5 0 0 0 .46.88h.01l.02-.02.04-.02.1-.08c.09-.07.18-.17.28-.3.18-.28.33-.7.33-1.28 0-1.03-.67-1.73-1.48-1.76-.37-.01-.74.12-1.02.4a1.37 1.37 0 0 0-1.02-.4c-.8.03-1.48.73-1.48 1.76 0 .59.15 1 .33 1.28a1.4 1.4 0 0 0 .42.4l.01.01h.01a.5.5 0 0 0 .48-.87.42.42 0 0 1-.08-.1c-.07-.1-.17-.3-.17-.72 0-.57.33-.75.52-.76.1 0 .21.04.3.13.08.1.18.29.18.63Zm-.75.82-.02-.01h.02Z"
  }
});