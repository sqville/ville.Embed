/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextGrammarWand",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm0 3a.5.5 0 0 0 0 1h6.88a1.5 1.5 0 0 1-.37-.99V11H2.5Zm0 3h6.38l-1 1H2.5a.5.5 0 0 1 0-1ZM14 7a.5.5 0 0 1 .5.44l.1.79a2.5 2.5 0 0 0 2.17 2.18l.8.1a.5.5 0 0 1 0 .99l-.8.1a2.5 2.5 0 0 0-2.18 2.17l-.1.8a.5.5 0 0 1-.99 0l-.1-.8a2.5 2.5 0 0 0-2.17-2.18l-.8-.1a.5.5 0 0 1 0-.99l.8-.1a2.5 2.5 0 0 0 2.18-2.17l.1-.8A.5.5 0 0 1 14 7Zm0 2.6a3.5 3.5 0 0 1-1.4 1.4c.59.32 1.08.81 1.4 1.4a3.5 3.5 0 0 1 1.4-1.4A3.5 3.5 0 0 1 14 9.6Zm-2.15 3.55c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7-.7l4-4c.2-.2.5-.2.7 0Z",
    FILLED : "M2.75 4.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Zm0 3a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm0 3a.75.75 0 0 0 0 1.5h6.63a1.5 1.5 0 0 1-.28-1.5H2.75Zm0 3h6.63L7.88 15H2.75a.75.75 0 0 1 0-1.5ZM14.5 7.44a.5.5 0 0 0-1 0l-.1.79a2.5 2.5 0 0 1-2.17 2.18l-.8.1a.5.5 0 0 0 0 .99l.8.1a2.5 2.5 0 0 1 2.18 2.17l.1.8a.5.5 0 0 0 .99 0l.1-.8a2.5 2.5 0 0 1 2.17-2.18l.8-.1a.5.5 0 0 0 0-.99l-.8-.1a2.5 2.5 0 0 1-2.18-2.17l-.1-.8Zm-2.65 5.7c.2.2.2.52 0 .71l-4 4a.5.5 0 0 1-.7-.7l4-4c.2-.2.5-.2.7 0Z"
  }
});