/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ColorLine",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.1 12H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5.3l-.57.57a2.5 2.5 0 0 1-.57.43H16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.08A1.48 1.48 0 0 1 4 12.4v-.04l.04-.17.05-.2Zm8.07-9.38a2.26 2.26 0 0 1 3.07-.13l.13.12.13.14c.72.85.72 2.1 0 2.95l-.12.13-5.96 6a1.5 1.5 0 0 1-.55.34l-.16.05-3.08.76a.5.5 0 0 1-.62-.53l.01-.08.8-3.07c.05-.2.15-.4.28-.57l.1-.11 5.97-6Zm2.5.7a1.26 1.26 0 0 0-1.69-.09l-.1.1-5.97 6a.5.5 0 0 0-.1.14l-.03.08-.58 2.26 2.27-.56a.5.5 0 0 0 .12-.04l.05-.03.07-.06 5.96-6c.5-.49.5-1.3 0-1.8Z",
    FILLED : "M15.24 2.54a2.26 2.26 0 0 0-3.07.13L6.21 8.66l-.11.12a1.5 1.5 0 0 0-.28.56l-.8 3.08-.01.08a.5.5 0 0 0 .62.53l3.08-.76.16-.05c.2-.08.4-.2.55-.35l5.96-6 .12-.12c.72-.85.72-2.1 0-2.95l-.13-.14-.13-.12ZM4.1 12H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5.3l-.57.57a2.5 2.5 0 0 1-.92.59H9.2l-.21.07-3.11.77A1.5 1.5 0 0 1 4 12.4v-.04l.04-.16.05-.21Z"
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