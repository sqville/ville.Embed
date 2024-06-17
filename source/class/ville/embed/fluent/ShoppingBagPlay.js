/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShoppingBagPlay",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15 6a1 1 0 0 1 1 1v2.2c-.32-.08-.66-.15-1-.18V7h-3v2.6c-.36.18-.7.4-1 .66V7H5v8a1.98 1.98 0 0 0 1.23 1.84c.24.1.5.16.77.16h2.6c.18.36.4.7.66 1H7a3 3 0 0 1-3-3V7a1 1 0 0 1 1-1h1V4.5a2.42 2.42 0 0 1 .73-1.77A2.43 2.43 0 0 1 8.5 2a2.43 2.43 0 0 1 1.5.5 2.44 2.44 0 0 1 2.48-.3 2.53 2.53 0 0 1 1.32 1.33c.13.3.2.63.2.97V6h1Zm-2-1.5a1.47 1.47 0 0 0-.44-1.06A1.48 1.48 0 0 0 11.5 3c-.3 0-.58.09-.83.26A2.5 2.5 0 0 1 11 4.5V6h2V4.5ZM7 6h3V4.5a1.47 1.47 0 0 0-.44-1.06A1.48 1.48 0 0 0 8.5 3a1.47 1.47 0 0 0-1.06.44A1.48 1.48 0 0 0 7 4.5V6Zm12 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.98-1.97a.45.45 0 0 0-.45-.03.5.5 0 0 0-.15.1.51.51 0 0 0-.14.36v3.08a.5.5 0 0 0 .14.35.45.45 0 0 0 .52.12.54.54 0 0 0 .09-.05l2.3-1.57a.46.46 0 0 0 .16-.18.54.54 0 0 0 0-.49.49.49 0 0 0-.17-.18l-2.3-1.5Z",
    FILLED : "M6 4.5V6H5a1 1 0 0 0-1 1v8a2.93 2.93 0 0 0 .88 2.13A3 3 0 0 0 7 18h3.26a5.48 5.48 0 0 1 .74-7.74V4.5a2.48 2.48 0 0 0-.33-1.24 1.48 1.48 0 0 1 2.21.66c.08.18.12.37.12.58V6h-1v3.6a5.48 5.48 0 0 1 4-.4V7a1 1 0 0 0-1-1h-1V4.5a2.48 2.48 0 0 0-4-2A2.54 2.54 0 0 0 8.5 2a2.42 2.42 0 0 0-1.77.73A2.43 2.43 0 0 0 6 4.5ZM10 6H7V4.5a1.48 1.48 0 0 1 .91-1.38 1.48 1.48 0 0 1 1.97.8c.08.18.12.37.12.58V6Zm4.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.74-6.55c.1 0 .18.03.26.08l2.3 1.51c.07.05.12.1.16.18a.54.54 0 0 1-.03.54.46.46 0 0 1-.13.13l-2.3 1.57a.54.54 0 0 1-.12.06.45.45 0 0 1-.32-.02.57.57 0 0 1-.16-.1.5.5 0 0 1-.14-.36v-3.08a.51.51 0 0 1 .3-.46.44.44 0 0 1 .18-.05Z"
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