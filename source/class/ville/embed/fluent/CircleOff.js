/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CircleOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 4.7 2.15 2.86a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7L15.29 16A8 8 0 0 1 4 4.7Zm10.58 10.6L4.71 5.41a7 7 0 0 0 9.87 9.87ZM17 10c0 1.39-.4 2.69-1.1 3.77l.72.73A8 8 0 0 0 5.5 3.39l.72.71A7 7 0 0 1 17 10Z",
    FILLED : "m15.3 16 1.85 1.85a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7L4 4.71A8 8 0 0 0 15.3 16Zm2.7-6c0 1.67-.51 3.21-1.38 4.5L5.5 3.38A8 8 0 0 1 18 10Z"
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