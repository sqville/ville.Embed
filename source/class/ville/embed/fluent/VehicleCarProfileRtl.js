/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VehicleCarProfileRtl",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.48 6.03 15.14 8H12V5h1.06c.64 0 1.22.41 1.42 1.03Zm1 2.97.26.08.12.03A1.5 1.5 0 0 1 17 10.56v1.69c0 .16-.05.31-.14.43a2.5 2.5 0 0 0-4.81.32h-4.1a2.5 2.5 0 0 0-4.81-.32.75.75 0 0 1-.14-.43v-1.21c0-.68.46-1.28 1.11-1.45L6.31 9h9.16ZM7.12 8l1.24-2.23A1.5 1.5 0 0 1 9.67 5H11v3H7.13ZM2 12.25c0 .7.42 1.32 1.02 1.6a2.5 2.5 0 0 0 4.93.15h4.1a2.5 2.5 0 0 0 4.93-.16c.6-.27 1.02-.88 1.02-1.59v-1.69a2.5 2.5 0 0 0-1.75-2.38l-.82-2.47A2.5 2.5 0 0 0 13.06 4H9.68c-.91 0-1.75.5-2.19 1.29L5.95 8.06l-2.1.56A2.5 2.5 0 0 0 2 11.04v1.21ZM14.5 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z",
    FILLED : "M3.02 13.84A1.75 1.75 0 0 1 2 12.25v-1.21a2.5 2.5 0 0 1 1.86-2.42l2.09-.56L7.49 5.3A2.5 2.5 0 0 1 9.68 4h3.38a2.5 2.5 0 0 1 2.37 1.7l.82 2.48A2.5 2.5 0 0 1 18 10.56v1.69c0 .7-.42 1.32-1.02 1.6a2.5 2.5 0 0 1-4.93.15h-4.1a2.5 2.5 0 0 1-4.93-.16ZM13.06 5H12v3h3.14l-.66-1.97A1.5 1.5 0 0 0 13.06 5Zm-4.7.77L7.14 8H11V5H9.68c-.55 0-1.05.3-1.31.77ZM16 13.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-9 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
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