/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Highlight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3.5 2c.28 0 .5.22.5.5v4c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 1 0v4c0 .65-.42 1.2-1 1.41V9a2 2 0 0 1-2 2v2.07a2 2 0 0 1-1.1 1.8l-6.18 3.08A.5.5 0 0 1 6 17.5V11a2 2 0 0 1-2-2V7.91c-.58-.2-1-.76-1-1.41v-4c0-.28.22-.5.5-.5ZM5 8v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8H5Zm2 3v5.7l5.45-2.73a1 1 0 0 0 .55-.9V11H7Z",
    FILLED : "M4.5 2C3.67 2 3 2.67 3 3.5v3C3 7.33 3.67 8 4.5 8h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11ZM6 11a2 2 0 0 1-2-2h12a2 2 0 0 1-2 2H6Zm0 1h8v1.07a2 2 0 0 1-1.1 1.8l-6.18 3.08A.5.5 0 0 1 6 17.5V12Z"
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