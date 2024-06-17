/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DialpadOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7l4.2 4.22A1 1 0 0 0 5 8a1 1 0 1 0 1.93-.36l3.43 3.43a1 1 0 1 0 .57.57l6.22 6.21a.5.5 0 0 0 .7-.7l-15-15ZM15 12a1 1 0 0 1-.23.64l-1.41-1.4A1 1 0 0 1 15 12Zm-4-4a1 1 0 0 1-.23.64l-1.41-1.4A1 1 0 0 1 11 8ZM7 4a1 1 0 0 1-.23.64l-1.41-1.4A1 1 0 0 1 7 4Zm0 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3-11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7l3.9 3.9H6a1.25 1.25 0 1 0 1.25 1.2l2.8 2.8H10a1.25 1.25 0 1 0 1.25 1.2l5.9 5.9a.5.5 0 0 0 .7-.7l-15-15ZM15.25 12c0 .31-.12.6-.3.82l-1.77-1.76a1.25 1.25 0 0 1 2.07.94Zm-4-4c0 .31-.12.6-.3.82L9.17 7.06a1.25 1.25 0 0 1 2.07.94Zm-4-4c0 .31-.12.6-.3.82L5.17 3.06A1.25 1.25 0 0 1 7.25 4Zm0 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM10 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM11.25 16a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM14 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
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