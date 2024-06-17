/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Autocorrect",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.14 5.48a1 1 0 0 1 1.72 0L12.98 9h-.48a3.75 3.75 0 1 0 2.3 1h2.7a.5.5 0 0 0 0-1h-3.35l-2.44-4.03a2 2 0 0 0-3.42 0L2.07 15.24a.5.5 0 0 0 .86.52L9.14 5.48ZM12.25 10a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z",
    FILLED : "M2.17 14.75 8.03 4.16a2.25 2.25 0 0 1 3.94 0L14.1 8h3.15a.75.75 0 0 1 0 1.5h-2.26a4.25 4.25 0 1 1-2.89-1.49l.15-.01h.03l-1.84-3.25a.5.5 0 0 0-.87 0L3.47 15.5l-.06.12a.75.75 0 1 1-1.31-.73l.07-.13ZM9 12.25a2.75 2.75 0 1 0 5.5 0 2.75 2.75 0 0 0-5.5 0Z"
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