/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CreditCardToolbox",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16H9v-1H4.75C3.78 15 3 14.22 3 13.25V9h15V6.75A2.75 2.75 0 0 0 15.25 4H4.75ZM3 6.75C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75V8H3V6.75ZM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0Z",
    FILLED : "M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75V8H2V6.75ZM13.5 9H2v4.25A2.75 2.75 0 0 0 4.75 16H9v-2.5a2.5 2.5 0 0 1 2.04-2.46A2.5 2.5 0 0 1 13.5 9ZM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0Z"
  }
});