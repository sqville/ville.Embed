/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CircleHint",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.44 2.15a8.2 8.2 0 0 1 3.12 0 .5.5 0 0 1-.2.98 7.2 7.2 0 0 0-2.73 0 .5.5 0 0 1-.2-.98Zm5.31 1.34a.5.5 0 0 1 .7-.14 8.04 8.04 0 0 1 2.2 2.2.5.5 0 1 1-.83.56 7.04 7.04 0 0 0-1.93-1.93.5.5 0 0 1-.14-.7Zm-7.5 0a.5.5 0 0 1-.14.69A7.04 7.04 0 0 0 4.18 6.1a.5.5 0 0 1-.83-.56 8.04 8.04 0 0 1 2.2-2.2.5.5 0 0 1 .7.14ZM2.74 8.05a.5.5 0 0 1 .4.58 7.2 7.2 0 0 0 0 2.74.5.5 0 0 1-.99.2 8.2 8.2 0 0 1 0-3.13.5.5 0 0 1 .59-.4Zm14.52 0a.5.5 0 0 1 .59.39 8.2 8.2 0 0 1 0 3.12.5.5 0 1 1-.98-.2 7.2 7.2 0 0 0 0-2.73.5.5 0 0 1 .39-.58Zm-13.78 5.7a.5.5 0 0 1 .7.14 7.04 7.04 0 0 0 1.93 1.93.5.5 0 0 1-.56.83 8.04 8.04 0 0 1-2.2-2.2.5.5 0 0 1 .13-.7Zm13.03 0c.23.16.3.47.14.7a8.04 8.04 0 0 1-2.2 2.2.5.5 0 0 1-.56-.83 7.04 7.04 0 0 0 1.93-1.93.5.5 0 0 1 .7-.14Zm-8.46 3.51a.5.5 0 0 1 .58-.4c.89.18 1.85.18 2.74 0a.5.5 0 0 1 .19.99 8.2 8.2 0 0 1-3.12 0 .5.5 0 0 1-.4-.59Z",
    FILLED : "M8.7 2.1a8.18 8.18 0 0 1 2.6 0 .75.75 0 0 1-.24 1.49 6.68 6.68 0 0 0-2.12 0A.75.75 0 1 1 8.7 2.1ZM6.39 3.68c.24.34.16.8-.18 1.05-.57.41-1.08.92-1.5 1.5a.75.75 0 0 1-1.21-.88A8.04 8.04 0 0 1 5.34 3.5a.75.75 0 0 1 1.05.17Zm7.22 0a.75.75 0 0 1 1.05-.17 8.04 8.04 0 0 1 1.84 1.84.75.75 0 0 1-1.22.87 6.54 6.54 0 0 0-1.5-1.5.75.75 0 0 1-.17-1.04ZM2.97 8.07c.4.08.68.46.62.87a6.68 6.68 0 0 0 0 2.12.75.75 0 0 1-1.48.24 8.19 8.19 0 0 1 0-2.6c.06-.41.45-.69.86-.62Zm14.06 0c.41-.06.8.22.86.63.14.85.14 1.75 0 2.6a.75.75 0 0 1-1.48-.24c.12-.69.12-1.43 0-2.12-.06-.4.21-.8.62-.86ZM3.67 13.62a.75.75 0 0 1 1.05.18c.41.57.92 1.08 1.5 1.5a.75.75 0 1 1-.88 1.21 8.04 8.04 0 0 1-1.84-1.84.75.75 0 0 1 .17-1.05Zm12.66 0c.34.25.41.71.17 1.05a8.04 8.04 0 0 1-1.84 1.84.75.75 0 0 1-.87-1.22 6.54 6.54 0 0 0 1.5-1.5.75.75 0 0 1 1.04-.17Zm-8.25 3.42c.07-.4.45-.68.86-.62.69.12 1.43.12 2.12 0a.75.75 0 0 1 .24 1.48c-.85.14-1.75.14-2.6 0a.75.75 0 0 1-.62-.86Z"
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