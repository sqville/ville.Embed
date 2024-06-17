/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentLandscape",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M18 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V14Zm-2 1a1 1 0 0 0 1-1v-4h-3.5A1.5 1.5 0 0 1 12 8.5V5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12Zm-3-9.8v3.3c0 .28.22.5.5.5h3.3L13 5.2Z",
    FILLED : "M18 10h-4.5A1.5 1.5 0 0 1 12 8.5V4H3.5C2.67 4 2 4.67 2 5.5v9c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5V10Zm-.25-1H13.5a.5.5 0 0 1-.5-.5V4.25L17.75 9Z"
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