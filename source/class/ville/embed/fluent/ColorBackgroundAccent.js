/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ColorBackgroundAccent",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m2.75 11.41.33.33a3 3 0 0 0 4.24 0l.68-.68c.03 1.34.96 2.94 2.75 2.94 1.82 0 2.75-1.65 2.75-3 0-1.01-.53-1.96-.86-2.47-.2-.3-.38-.55-.52-.72V7.8l-.24-.29h-.01a1.5 1.5 0 0 0-.85-.49 3 3 0 0 0-.8-2.27h5.28c.97 0 1.75.78 1.75 1.75v7c0 .97-.78 1.75-1.75 1.75h-11c-.97 0-1.75-.78-1.75-1.75v-2.09Z",
    FILLED : ""
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