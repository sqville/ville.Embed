/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Cursor",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 3.06a1 1 0 0 1 1.64-.77l11 9.06a1 1 0 0 1-.63 1.77h-5.6c-.43 0-.85.19-1.13.52L6.76 17.7A1 1 0 0 1 5 17.06v-14Zm12 9.06L6 3.06v14l3.52-4.08a2.5 2.5 0 0 1 1.9-.86H17Z",
    FILLED : "M6.64 2.29A1 1 0 0 0 5 3.06v14a1 1 0 0 0 1.76.65l3.52-4.07c.28-.33.7-.52 1.13-.52h5.6a1 1 0 0 0 .63-1.77l-11-9.06Z"
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