/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ReceiptMoney",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 5c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3h-4.05c.03-.16.05-.33.05-.5V16h3V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v6H4V5Zm13 8h-2v3a2 2 0 0 0 2-2v-1ZM7 6.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm3 4c0-.83-.67-1.5-1.5-1.5h-6c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-3Zm-1 2v1a.5.5 0 0 0-.5.5h-1c0-.83.67-1.5 1.5-1.5ZM8.5 13c0 .28.22.5.5.5v1A1.5 1.5 0 0 1 7.5 13h1Zm-6.5.5a.5.5 0 0 0 .5-.5h1c0 .83-.67 1.5-1.5 1.5v-1Zm.5 3.5a.5.5 0 0 0-.5-.5v-1c.83 0 1.5.67 1.5 1.5h-1ZM4 15a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
    FILLED : "M4 5c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3h-4.05c.03-.16.05-.33.05-.5v-3A2.5 2.5 0 0 0 8.5 11H4V5Zm11 11a2 2 0 0 0 2-2v-1h-2v3ZM7.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm2.5 4.5c0-.83-.67-1.5-1.5-1.5h-6c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-3Zm-1 2v1a.5.5 0 0 0-.5.5h-1c0-.83.67-1.5 1.5-1.5ZM8.5 13c0 .28.22.5.5.5v1A1.5 1.5 0 0 1 7.5 13h1Zm-6.5.5a.5.5 0 0 0 .5-.5h1c0 .83-.67 1.5-1.5 1.5v-1Zm.5 3.5a.5.5 0 0 0-.5-.5v-1c.83 0 1.5.67 1.5 1.5h-1ZM4 15a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
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
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});