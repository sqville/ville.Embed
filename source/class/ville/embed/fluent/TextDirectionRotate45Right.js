/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextDirectionRotate45Right",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M18 8.5a.5.5 0 0 0-1 0v1.8l-3.15-3.15a.5.5 0 1 0-.7.7L16.29 11H14.5a.5.5 0 1 0 0 1h3a.5.5 0 0 0 .5-.5v-3Zm-5.05-5.78a.5.5 0 0 0-.67-.67l-8 4a.5.5 0 0 0 .45.9l2.34-1.18 2.15 2.16-1.17 2.35a.5.5 0 1 0 .9.44l4-8ZM9.7 7 8 5.3l3.37-1.68L9.7 6.99Zm2.3 7.5a.5.5 0 0 0-1 0v1.8L2.85 8.15a.5.5 0 1 0-.7.7L10.29 17H8.5a.5.5 0 1 0 0 1h3a.5.5 0 0 0 .5-.5v-3Z",
    FILLED : "M17.25 8c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-2.5a.75.75 0 1 1 0-1.5h.69l-2.22-2.22a.75.75 0 0 1 1.06-1.06l2.22 2.22v-.7c0-.4.34-.74.75-.74Zm-3.83-4.91a.75.75 0 0 0-1-1.01l-8 4a.75.75 0 1 0 .67 1.34l2.18-1.1 1.9 1.91-1.1 2.18a.75.75 0 1 0 1.35.68l4-8ZM9.88 6.82l-1.2-1.2 2.4-1.2-1.2 2.4ZM12 14.75a.75.75 0 0 0-1.5 0v.69L3.28 8.22a.75.75 0 1 0-1.06 1.06l7.22 7.22h-.69a.75.75 0 0 0 0 1.5h2.5c.41 0 .75-.34.75-.75v-2.5Z"
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