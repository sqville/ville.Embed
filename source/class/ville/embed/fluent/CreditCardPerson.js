/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CreditCardPerson",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h5.3c.07-.37.23-.7.45-1H4.75C3.78 15 3 14.22 3 13.25V9h15V6.75A2.75 2.75 0 0 0 15.25 4H4.75ZM3 6.75C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75V8H3V6.75ZM16.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S11 17.75 11 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    FILLED : "M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75V8H2V6.75ZM2 9h12.5a3 3 0 0 0-2.23 5.01c-1.1.1-2 .92-2.22 1.99h-5.3A2.75 2.75 0 0 1 2 13.25V9Zm14.5 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S11 17.75 11 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z"
  }
});