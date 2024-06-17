/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowAutofitHeight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m15 3.63 1.14 1.18a.5.5 0 1 0 .72-.7l-1.82-1.88a.75.75 0 0 0-1.08 0L12.14 4.1a.5.5 0 1 0 .72.7L14 3.63V7.5a.5.5 0 0 0 1 0V3.63ZM3 5c0-1.1.9-2 2-2h4.5a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.5a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2V5Zm13.14 10.2L15 16.36V12.5a.5.5 0 1 0-1 0v3.87l-1.14-1.18a.5.5 0 1 0-.72.7l1.82 1.88c.3.3.79.3 1.08 0l1.82-1.88a.5.5 0 1 0-.72-.7Z",
    FILLED : "m15 4.5.71.73A.75.75 0 0 0 16.8 4.2l-1.82-1.88a1 1 0 0 0-1.44 0l-1.82 1.88a.75.75 0 0 0 1.08 1.04l.71-.74v2.76a.75.75 0 0 0 1.5 0V4.5ZM3 5c0-1.1.9-2 2-2h4.25a.75.75 0 0 1 0 1.5H5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h4.25a.75.75 0 0 1 0 1.5H5a2 2 0 0 1-2-2V5Zm12.71 9.77-.7.73v-2.75a.75.75 0 1 0-1.5 0v2.76l-.72-.74a.75.75 0 0 0-1.08 1.04l1.82 1.88a1 1 0 0 0 1.44 0l1.82-1.88a.75.75 0 0 0-1.08-1.04Z"
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