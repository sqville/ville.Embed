/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Gesture",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.01 4.4A.5.5 0 0 1 5.5 4h9a.5.5 0 0 1 0 1H7.8l8.9 4.04a.5.5 0 0 1 .04.9l-11 5.92a.5.5 0 1 1-.48-.88l10.12-5.44L5.29 4.96a.5.5 0 0 1-.28-.57ZM17 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM3.5 17a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
    FILLED : "M18 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM3.5 16.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.75 4a.75.75 0 0 0-.3 1.43l9.06 4.1-9.6 4.8a.75.75 0 1 0 .68 1.34l11-5.5a.75.75 0 0 0-.03-1.35L9.23 5.5h5.52a.75.75 0 0 0 0-1.5h-9Z"
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