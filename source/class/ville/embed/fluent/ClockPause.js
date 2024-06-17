/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ClockPause",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11 1a8 8 0 1 1-.59 15.98c.16-.31.29-.64.38-.98H11a7 7 0 1 0-7-6.8c-.34.1-.67.23-.98.39L3 9a8 8 0 0 1 8-8Zm-.5 3a.5.5 0 0 1 .5.41V9h2.5a.5.5 0 0 1 .09 1H10.5a.5.5 0 0 1-.5-.41V4.5c0-.28.22-.5.5-.5ZM10 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM4 17a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4c0 .28.22.5.5.5Zm3 0a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4c0 .28.22.5.5.5Z",
    FILLED : "M11 1a8 8 0 1 1-.59 15.98 5.5 5.5 0 0 0-7.39-7.39L3 9a8 8 0 0 1 8-8Zm-.5 3a.5.5 0 0 0-.5.5v5.09a.5.5 0 0 0 .5.41h3.09a.5.5 0 0 0-.09-1H11V4.41a.5.5 0 0 0-.5-.41ZM10 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM4 17a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4c0 .28.22.5.5.5Zm3 0a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4c0 .28.22.5.5.5Z"
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