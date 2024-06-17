/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingLighthouse",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m10.33 2.69-.77-.52a1 1 0 0 0-1.1 0l-.78.5-2.1 1.21A1.13 1.13 0 0 0 5 4.93 1 1 0 0 0 6 6v2.16a2 2 0 0 0-1.2 1.62l-.8 7.1A1 1 0 0 0 5 18h8a1 1 0 0 0 1-1.11l-.8-7.11A2 2 0 0 0 12 8.16V6a1 1 0 0 0 1-1.09v-.04c0-.4-.22-.78-.57-.99l-2.1-1.2ZM11 8H7V6h4v2ZM6.1 5a.13.13 0 0 1-.05-.03L8.2 3.53l.8-.45.8.46 2.15 1.43a.13.13 0 0 1-.06.03H6.11Zm.74 4h4.32a1 1 0 0 1 1 .89l.01.18-3.55.95-2.98.78.2-1.91a1 1 0 0 1 1-.89Zm2.03 2.99 3.41-.9.22 1.9-3.88 1.03-3.33.87.23-2.01 3.35-.9Zm-3.7 3.98 3.7-.98 3.74-.99.33 3H5.06l.11-1.03ZM16.5 7h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1Zm-.65-3.85c.2.2.2.5 0 .7l-1 1a.5.5 0 1 1-.7-.7l1-1a.5.5 0 0 1 .7 0Zm0 6a.5.5 0 0 1-.7.7l-1-1a.5.5 0 1 1 .7-.7l1 1Z",
    FILLED : "M8.45 2.17a1 1 0 0 1 1.1 0l3 2A1 1 0 0 1 12 6v2.16a2 2 0 0 1 1.2 1.62l.8 7.1A1 1 0 0 1 13 18H5a1 1 0 0 1-1-1.11l.8-7.11A2 2 0 0 1 6 8.16V6a1 1 0 0 1-.55-1.83l3-2ZM7 6v2h4V6H7Zm5.33 5.07-6.87 1.81-.22 2.03 7.3-1.93-.2-1.9ZM14.5 7h2a.5.5 0 1 0 0-1h-2a.5.5 0 0 0 0 1Zm1.35-3.85c.2.2.2.5 0 .7l-1 1a.5.5 0 0 1-.7-.7l1-1c.2-.2.5-.2.7 0Zm0 6a.5.5 0 0 1-.7.7l-1-1a.5.5 0 1 1 .7-.7l1 1Z"
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