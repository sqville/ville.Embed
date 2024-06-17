/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SlideMicrophone",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 2.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm-.5 3c0-.28.22-.5.5-.5H10a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5ZM4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h5.92a4.97 4.97 0 0 1-.32-1H4.5A1.5 1.5 0 0 1 3 13.5v-7C3 5.67 3.67 5 4.5 5h11c.83 0 1.5.67 1.5 1.5v3.26a3 3 0 0 1 1 2.2V6.5A2.5 2.5 0 0 0 15.5 4h-11Zm8.5 8a2 2 0 1 1 4 0v2a2 2 0 0 1-4 0v-2Zm-.97 2.43a.5.5 0 1 0-.99.14 4 4 0 0 0 3.46 3.4v.53a.5.5 0 1 0 1 0v-.53a4 4 0 0 0 3.46-3.4.5.5 0 1 0-1-.14 3 3 0 0 1-5.93 0Z",
    FILLED : "M2 6.5A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v5.47a3 3 0 0 0-6 .03v1.07a1.5 1.5 0 0 0-1.95 1.64c.06.45.19.89.37 1.29H4.5A2.5 2.5 0 0 1 2 13.5v-7Zm3.5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM5 10c0 .28.22.5.5.5H11a.5.5 0 0 0 0-1H5.5a.5.5 0 0 0-.5.5Zm.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.5 0a2 2 0 1 1 4 0v2a2 2 0 0 1-4 0v-2Zm-.97 2.43a.5.5 0 1 0-.99.14 4 4 0 0 0 3.46 3.4v.53a.5.5 0 1 0 1 0v-.53a4 4 0 0 0 3.46-3.4.5.5 0 1 0-1-.14 3 3 0 0 1-5.93 0Z"
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