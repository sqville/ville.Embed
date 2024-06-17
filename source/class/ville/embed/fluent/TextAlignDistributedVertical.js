/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextAlignDistributedVertical",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.85 4.85a.5.5 0 0 1-.7 0L16 3.71V17.5a.5.5 0 1 1-1 0V3.7l-1.15 1.15a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7Zm-15 10.3a.5.5 0 1 0-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 1 0-.7-.7L5 16.29V2.5a.5.5 0 0 0-1 0v13.8l-1.15-1.15ZM10 18a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5Z",
    FILLED : "M3.03 14.72a.75.75 0 0 0-1.06 1.06l2 2c.3.3.77.3 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V2.75a.75.75 0 0 0-1.5 0v12.69l-.72-.72ZM10 18a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v14.5c0 .41-.34.75-.75.75Zm8.03-12.72c-.3.3-.77.3-1.06 0l-.72-.72v12.69a.75.75 0 0 1-1.5 0V4.56l-.72.72a.75.75 0 1 1-1.06-1.06l2-2c.3-.3.77-.3 1.06 0l2 2c.3.3.3.77 0 1.06Z"
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