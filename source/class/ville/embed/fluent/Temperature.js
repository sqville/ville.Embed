/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Temperature",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 6.5c.28 0 .5.22.5.5v5.06a2 2 0 1 1-1 0V7c0-.28.22-.5.5-.5ZM10 2a3 3 0 0 0-3 3v6.35A3.99 3.99 0 0 0 10 18a4 4 0 0 0 3-6.65V5a3 3 0 0 0-3-3Zm0 1a2 2 0 0 1 2 2v6.75l.14.15a3 3 0 1 1-4.29 0l.15-.15V5c0-1.1.9-2 2-2Z",
    FILLED : "M10.75 7.25a.75.75 0 0 0-1.5 0v4.9a2 2 0 1 0 1.5 0v-4.9ZM6.5 5.5a3.5 3.5 0 0 1 7 0v5.67A4.48 4.48 0 0 1 10 18.5a4.5 4.5 0 0 1-3.5-7.33V5.5Zm1.5 0v6.24l-.2.22a3 3 0 1 0 4.4 0l-.2-.22V5.5a2 2 0 0 0-4 0Z"
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