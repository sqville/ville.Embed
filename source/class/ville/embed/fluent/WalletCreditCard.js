/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WalletCreditCard",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 1.64a1.5 1.5 0 0 1 2.18-.3l3.27 2.65c.6.5.73 1.37.3 2h-1.23l.4-.55a.5.5 0 0 0-.1-.67L13.13 3.4 11.33 6h-1.2l2.22-3.23-.8-.66a.5.5 0 0 0-.73.1L8.18 6H6.96L10 1.64ZM13.5 12a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-9-7h2.17l-.7 1H4.5a.5.5 0 0 0 0 1H15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 14.5v-8C3 5.67 3.67 5 4.5 5ZM4 14.5c0 .83.67 1.5 1.5 1.5H15a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H4.5a1.5 1.5 0 0 1-.5-.09v6.59Z",
    FILLED : "M12.18 1.34a1.5 1.5 0 0 0-2.18.3L6.96 6h1.22l2.64-3.79a.5.5 0 0 1 .73-.1l.8.66L10.12 6h1.22l1.8-2.6 1.68 1.37c.2.16.24.46.1.67l-.4.56h1.22a1.5 1.5 0 0 0-.3-2.01l-3.26-2.65ZM4.5 5C3.67 5 3 5.67 3 6.5v8A2.5 2.5 0 0 0 5.5 17H15a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H4.5a.5.5 0 0 1 0-1h1.47l.7-1H4.5Zm9 7h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Z"
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