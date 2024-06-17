/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookmarkOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 4.7 2.15 2.86a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7L16 16.71v.79a.5.5 0 0 1-.8.4L10 14.12 4.8 17.9a.5.5 0 0 1-.8-.4V4.7Zm11 11L5 5.7v10.82l4.7-3.42a.5.5 0 0 1 .6 0l4.7 3.42v-.81Zm0-11.2v8.38l1 1V4.5A2.5 2.5 0 0 0 13.5 2h-7a2.5 2.5 0 0 0-1.7.67l.7.71a1.5 1.5 0 0 1 1-.38h7c.83 0 1.5.67 1.5 1.5Z",
    FILLED : "m16 16.7 1.15 1.15a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7L4 4.71V17.5a.5.5 0 0 0 .8.4l5.2-3.78 5.2 3.78a.5.5 0 0 0 .8-.4v-.8Zm0-12.2v9.38L4.8 2.68A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5Z"
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