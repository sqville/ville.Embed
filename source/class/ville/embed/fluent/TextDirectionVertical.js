/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextDirectionVertical",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 3.5a.5.5 0 0 1 1 0v11.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.35.15.5.5 0 0 1-.35-.15l-2-2a.5.5 0 0 1 .7-.7L5 15.29V3.5Zm8 9a.5.5 0 0 1 1 0v2.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L13 15.29V12.5Zm.5-9.5a.5.5 0 0 0-.47.32l-3 8a.5.5 0 0 0 .94.36l1-2.68h3.06l1 2.68a.5.5 0 0 0 .94-.36l-3-8A.5.5 0 0 0 13.5 3Zm0 1.92L14.65 8h-2.3l1.15-3.08Z",
    FILLED : "M5 3.75a.75.75 0 0 1 1.5 0v10.69l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V3.75Zm8 9a.75.75 0 0 1 1.5 0v1.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.76.76 0 0 1 0-1.07c.3-.3.77-.28 1.06.01l.72.72v-1.69ZM13.5 3c.3 0 .58.19.7.47l3 7.5a.75.75 0 0 1-1.4.56L15 9.5h-3l-.8 2.03a.75.75 0 0 1-1.4-.56l3-7.5a.75.75 0 0 1 .7-.47Zm0 2.77L12.6 8h1.8l-.9-2.23Z"
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