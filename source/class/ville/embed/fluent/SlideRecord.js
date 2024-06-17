/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SlideRecord",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 7.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM5 10c0-.28.22-.5.5-.5h6.7c-.54.25-1.04.6-1.47 1H5.5A.5.5 0 0 1 5 10Zm4.6 2H5.5a.5.5 0 0 0 0 1h3.7c.1-.35.24-.68.4-1Zm-.58 3H4.5A1.5 1.5 0 0 1 3 13.5v-7C3 5.67 3.67 5 4.5 5h11c.83 0 1.5.67 1.5 1.5v3.1c.36.18.7.4 1 .66V6.5A2.5 2.5 0 0 0 15.5 4h-11A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h4.7c-.08-.32-.15-.66-.18-1Zm5.48 3a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
    FILLED : "M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h4.7a5.5 5.5 0 0 1 0-3H5.5a.5.5 0 0 1 0-1h4.1c.29-.56.67-1.07 1.13-1.5H5.5a.5.5 0 0 1 0-1h6.7a5.48 5.48 0 0 1 5.8.76V6.5A2.5 2.5 0 0 0 15.5 4h-11ZM5 7.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM14.5 18a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
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