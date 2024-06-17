/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SlideArrowRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 2.5a.5.5 0 0 0 0 1h5.23c.43-.4.93-.75 1.48-1H5.5Zm0 2.5h4.1c-.16.32-.3.65-.4 1H5.5a.5.5 0 0 1 0-1Zm-1 3h4.52c.03.34.1.68.19 1H4.5A2.5 2.5 0 0 1 2 13.5v-7A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v3.76a5.5 5.5 0 0 0-1-.66V6.5c0-.83-.67-1.5-1.5-1.5h-11C3.67 5 3 5.67 3 6.5v7c0 .83.67 1.5 1.5 1.5Zm14.5-.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    FILLED : "M2 6.5A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v3.76a5.48 5.48 0 0 0-5.8-.76H5.5a.5.5 0 0 0 0 1h5.23c-.46.43-.84.94-1.13 1.5H5.5a.5.5 0 0 0 0 1h3.7a5.5 5.5 0 0 0 0 3H4.5A2.5 2.5 0 0 1 2 13.5v-7Zm3.5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z"
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