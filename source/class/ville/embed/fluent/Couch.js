/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Couch",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 4a2 2 0 0 0-2 2v1.05A2.5 2.5 0 0 0 2 9.5V12c0 1.1.9 2 2 2v1.5a.5.5 0 0 0 1 0V14h10v1.5a.5.5 0 0 0 1 0V14a2 2 0 0 0 2-2V9.5a2.5 2.5 0 0 0-2-2.45V6a2 2 0 0 0-2-2H6Zm9 3.05A2.5 2.5 0 0 0 13.05 9h-6.1A2.5 2.5 0 0 0 5 7.05V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1.05ZM16 13H4a1 1 0 0 1-1-1V9.5a1.5 1.5 0 1 1 3 0c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5 1.5 1.5 0 0 1 3 0V12a1 1 0 0 1-1 1Z",
    FILLED : "M14 4H6a2 2 0 0 0-2 2v1a3 3 0 0 1 2.83 2h6.34A3 3 0 0 1 16 7V6a2 2 0 0 0-2-2Zm2 4a2 2 0 0 0-1.94 1.5c-.07.27-.28.5-.56.5h-7c-.28 0-.5-.23-.56-.5A2 2 0 0 0 2 10v2c0 1.1.9 2 2 2v1.5a.5.5 0 0 0 1 0V14h10v1.5a.5.5 0 0 0 1 0V14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z"
  }
});