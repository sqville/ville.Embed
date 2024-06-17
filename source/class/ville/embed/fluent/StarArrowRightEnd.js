/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.StarArrowRightEnd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.9 2.56a1 1 0 0 0-1.8 0L7.17 6.45l-4.31.62a1 1 0 0 0-.56 1.7l3.13 3.03-.74 4.28a1 1 0 0 0 1.45 1.05l3.05-1.6a5.44 5.44 0 0 1-.17-1.03l-3.35 1.75.74-4.28a1 1 0 0 0-.29-.88L3 8.06l4.32-.63a1 1 0 0 0 .75-.54L10 2.99l1.93 3.9c.15.3.43.5.75.54l4.32.63-.85.82c.35.11.69.25 1 .42l.55-.53a1 1 0 0 0-.56-1.7l-4.31-.62-1.93-3.9ZM19 14.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-4.15 2.35a.5.5 0 0 1-.7-.7L15.29 15H12.5a.5.5 0 0 1 0-1h2.8l-1.15-1.15a.5.5 0 0 1 .7-.7l2 2a.5.5 0 0 1 .15.35.5.5 0 0 1-.14.35l-2 2Z",
    FILLED : "M10.9 2.56a1 1 0 0 0-1.8 0L7.17 6.45l-4.31.62a1 1 0 0 0-.56 1.7l3.13 3.03-.74 4.28a1 1 0 0 0 1.45 1.05l3.05-1.6a5.46 5.46 0 0 1 5.31-6.9c.96 0 1.86.24 2.65.67l.55-.53a1 1 0 0 0-.56-1.7l-4.31-.62-1.93-3.9ZM19 14.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-4.15 2.35a.5.5 0 0 1-.7-.7L15.29 15H12.5a.5.5 0 0 1 0-1h2.8l-1.15-1.15a.5.5 0 0 1 .7-.7l2 2a.5.5 0 0 1 .15.35.5.5 0 0 1-.14.35l-2 2Z"
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