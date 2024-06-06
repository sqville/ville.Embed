/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GiftCardMoney",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M2 4.75A2.75 2.75 0 0 1 4.75 2h10.5A2.75 2.75 0 0 1 18 4.75V11h-1V8H8.7l1.65 1.65a.5.5 0 0 1-.7.7L8 8.71V13h1.12a2 2 0 0 0-.12.69V14H4.75A2.75 2.75 0 0 1 2 11.25v-6.5ZM3 8v3.25c0 .97.78 1.75 1.75 1.75H7V8.7l-1.65 1.65a.5.5 0 0 1-.7-.7L6.29 8H3Zm1.27-1A2 2 0 0 1 7 4.27V3H4.75C3.78 3 3 3.78 3 4.75V7h1.27ZM6 7h1V6a1 1 0 1 0-1 1Zm2-1v1h1a1 1 0 1 0-1-1Zm2.73 1H17V4.75C17 3.78 16.22 3 15.25 3H8v1.27A2 2 0 0 1 10.73 7ZM19 13.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Zm-1 3v-1c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5Zm-.5-3.5h-1c0 .83.67 1.5 1.5 1.5v-1a.5.5 0 0 1-.5-.5Zm-6 0a.5.5 0 0 1-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1Zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z";
   var pathdfilled = "M7 2H4.75A2.75 2.75 0 0 0 2 4.75V7h2.27A2 2 0 0 1 7 4.27V2Zm1 4v1h1a1 1 0 1 0-1-1Zm2.73 1A2 2 0 0 0 8 4.27V2h7.25A2.75 2.75 0 0 1 18 4.75V7h-7.27ZM8.71 8l1.64 1.65a.5.5 0 0 1-.7.7L8 8.71V14h1v-.5a2.5 2.5 0 0 1 2.5-2.5h6c.17 0 .34.02.5.05V8H8.7ZM7 14V8.7l-1.65 1.65a.5.5 0 0 1-.7-.7L6.29 8H2v3.25A2.75 2.75 0 0 0 4.75 14H7Zm0-8a1 1 0 1 0-1 1h1V6Zm12 7.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Zm-1 3v-1c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5Zm-.5-3.5h-1c0 .83.67 1.5 1.5 1.5v-1a.5.5 0 0 1-.5-.5Zm-6 0a.5.5 0 0 1-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1Zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});