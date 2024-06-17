/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowRepeatAll",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16.5 6.67a.5.5 0 0 1 .3.1l.08.07.01.02A5 5 0 0 1 13.22 15L13 15H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06-2.5-2.5a.5.5 0 0 1-.06-.63l.06-.07 2.5-2.5a.5.5 0 0 1 .76.63l-.06.07L6.72 14h.14L7 14h6a4 4 0 0 0 3.11-6.52.5.5 0 0 1 .39-.81Zm-4.85-4.02a.5.5 0 0 1 .63-.06l.07.06 2.5 2.5.06.07a.5.5 0 0 1 0 .56l-.06.07-2.5 2.5-.07.06a.5.5 0 0 1-.56 0l-.07-.06-.06-.07a.5.5 0 0 1 0-.56l.06-.07L13.28 6h-.14L13 6H7a4 4 0 0 0-3.1 6.52c.06.09.1.2.1.31a.5.5 0 0 1-.9.3A4.99 4.99 0 0 1 6.77 5h6.52l-1.65-1.65-.06-.07a.5.5 0 0 1 .06-.63Z",
    FILLED : "M15.75 6.01c.18 0 .34.06.47.17a5 5 0 0 1-3 8.82H8.56l1.22 1.22c.27.27.3.68.07.98l-.07.08a.75.75 0 0 1-.98.07l-.08-.07-2.5-2.5a.75.75 0 0 1-.07-.98l.07-.08 2.5-2.5a.75.75 0 0 1 1.13.98l-.07.08-1.22 1.22H13a3.5 3.5 0 0 0 3.5-3.3V10a3.5 3.5 0 0 0-1.26-2.69.75.75 0 0 1 .5-1.3Zm-5.53-3.29a.75.75 0 0 1 .98-.07l.08.07 2.5 2.5.07.08c.2.26.2.62.01.89l-.08.09-2.5 2.5-.08.07c-.26.2-.62.2-.89.01l-.09-.08-.07-.08a.75.75 0 0 1-.01-.89l.08-.09 1.22-1.22H7a3.5 3.5 0 0 0-3.5 3.3v.2c0 1.08.49 2.05 1.26 2.7.15.13.24.32.24.54a.75.75 0 0 1-1.25.56A5 5 0 0 1 6.78 5h4.66l-1.22-1.22-.07-.08a.75.75 0 0 1 .07-.98Z"
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