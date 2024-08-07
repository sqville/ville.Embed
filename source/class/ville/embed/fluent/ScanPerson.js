/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ScanPerson",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 3C3.67 3 3 3.67 3 4.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1h-2Zm0 14A1.5 1.5 0 0 1 3 15.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 4.5 18h2a.5.5 0 0 0 0-1h-2ZM17 4.5c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v2a.5.5 0 0 1-1 0v-2Zm-1.12 12.45a1.5 1.5 0 0 1-.38.05h-2a.5.5 0 0 0 0 1h2a2.5 2.5 0 0 0 2.5-2.5v-2a.5.5 0 0 0-1 0v2c0 .7-.47 1.28-1.12 1.45ZM5 16h-.5a.5.5 0 0 1-.47-.33A2 2 0 0 1 6 14h8a2 2 0 0 1 1.97 1.66.5.5 0 0 1-.47.34H15a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Zm7.5-7.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm1 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
    FILLED : "M4.5 3C3.67 3 3 3.67 3 4.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1h-2Zm0 14A1.5 1.5 0 0 1 3 15.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 4.5 18h2a.5.5 0 0 0 0-1h-2ZM17 4.5c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v2a.5.5 0 0 1-1 0v-2ZM15.5 17c.83 0 1.5-.67 1.5-1.5v-2a.5.5 0 0 1 1 0v2a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 0 1 0-1h2Zm-7.58 0c-.21-.58-.77-1-1.42-1h-2a.5.5 0 0 1-.47-.33A2 2 0 0 1 6 14h8a2 2 0 0 1 1.97 1.66.5.5 0 0 1-.47.34h-2c-.65 0-1.2.42-1.41 1H7.92ZM10 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
  }
});