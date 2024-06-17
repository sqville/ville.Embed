/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.StarCheckmark",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.9 2.9a1 1 0 0 0-1.8 0L7.17 6.8l-4.31.63a1 1 0 0 0-.56 1.7l3.13 3.05-.74 4.3a1 1 0 0 0 1.45 1.05l3.05-1.6a5.49 5.49 0 0 1-.18-1.04l-3.34 1.76.74-4.3a1 1 0 0 0-.29-.89L3 8.43l4.32-.63a1 1 0 0 0 .75-.55L10 3.35l1.93 3.9c.15.3.43.5.75.55l4.32.63-.85.82c.35.11.69.26 1 .43l.55-.54a1 1 0 0 0-.56-1.7l-4.31-.63L10.9 2.9ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    FILLED : "M10.9 2.9a1 1 0 0 0-1.8 0L7.17 6.8l-4.31.63a1 1 0 0 0-.56 1.7l3.13 3.05-.74 4.3a1 1 0 0 0 1.45 1.05l3.05-1.6a5.5 5.5 0 0 1 7.96-6.26l.55-.54a1 1 0 0 0-.56-1.7l-4.31-.63L10.9 2.9ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"
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