/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HeartCircleHint",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.44 2.15a8.04 8.04 0 0 1 3.12 0 .5.5 0 0 1-.2.98 7.04 7.04 0 0 0-2.73 0 .5.5 0 0 1-.2-.98Zm-5.7 5.9a.5.5 0 0 1 .4.58 7.04 7.04 0 0 0 0 2.74.5.5 0 0 1-.99.2 8.04 8.04 0 0 1 0-3.13.5.5 0 0 1 .59-.4Zm14.52 0a.5.5 0 0 1 .59.39 8.03 8.03 0 0 1 0 3.12.5.5 0 0 1-.98-.2 7.04 7.04 0 0 0 0-2.73.5.5 0 0 1 .39-.58Zm-9.21 9.21a.5.5 0 0 1 .58-.4 7.04 7.04 0 0 0 2.74 0 .5.5 0 1 1 .2.99 8.03 8.03 0 0 1-3.13 0 .5.5 0 0 1-.4-.59Zm6.4-13.91a8.04 8.04 0 0 1 2.2 2.2.5.5 0 1 1-.83.56 7.03 7.03 0 0 0-1.93-1.93.5.5 0 0 1 .56-.83Zm-8.2.13a.5.5 0 0 1-.14.7A7.04 7.04 0 0 0 4.18 6.1a.5.5 0 0 1-.83-.56 8.04 8.04 0 0 1 2.2-2.2.5.5 0 0 1 .7.13Zm10.27 10.27c.23.16.29.47.13.7a8.03 8.03 0 0 1-2.2 2.2.5.5 0 0 1-.56-.83 7.03 7.03 0 0 0 1.93-1.93.5.5 0 0 1 .7-.14Zm-13.04 0a.5.5 0 0 1 .7.14 7.04 7.04 0 0 0 1.93 1.93.5.5 0 1 1-.56.83 8.04 8.04 0 0 1-2.2-2.2.5.5 0 0 1 .13-.7Zm7.74-5.45a1.04 1.04 0 0 1 1.5 1.45l-2.72 3-2.73-3a1.04 1.04 0 0 1 1.5-1.45l.88.86c.2.19.5.19.7 0l.87-.86Zm2.25-.63a2.04 2.04 0 0 0-2.95-.08l-.52.5-.52-.5a2.04 2.04 0 0 0-2.95 2.83l3.1 3.42a.5.5 0 0 0 .74 0l3.1-3.42c.7-.78.7-1.97 0-2.75Z",
    FILLED : "M8.44 2.15a8.04 8.04 0 0 1 3.12 0 .5.5 0 0 1-.2.98 7.04 7.04 0 0 0-2.73 0 .5.5 0 0 1-.2-.98Zm-5.7 5.9a.5.5 0 0 1 .4.58 7.04 7.04 0 0 0 0 2.74.5.5 0 0 1-.99.2 8.04 8.04 0 0 1 0-3.13.5.5 0 0 1 .59-.4Zm14.52 0a.5.5 0 0 1 .59.39 8.03 8.03 0 0 1 0 3.12.5.5 0 0 1-.98-.2 7.04 7.04 0 0 0 0-2.73.5.5 0 0 1 .39-.58Zm-9.21 9.21a.5.5 0 0 1 .58-.4 7.04 7.04 0 0 0 2.74 0 .5.5 0 1 1 .2.99 8.03 8.03 0 0 1-3.13 0 .5.5 0 0 1-.4-.59Zm6.4-13.91a8.04 8.04 0 0 1 2.2 2.2.5.5 0 1 1-.83.56 7.03 7.03 0 0 0-1.93-1.93.5.5 0 0 1 .56-.83Zm-8.2.13a.5.5 0 0 1-.14.7A7.04 7.04 0 0 0 4.18 6.1a.5.5 0 0 1-.83-.56 8.04 8.04 0 0 1 2.2-2.2.5.5 0 0 1 .7.13Zm10.27 10.27c.23.16.29.47.13.7a8.03 8.03 0 0 1-2.2 2.2.5.5 0 0 1-.56-.83 7.03 7.03 0 0 0 1.93-1.93.5.5 0 0 1 .7-.14Zm-13.04 0a.5.5 0 0 1 .7.14 7.04 7.04 0 0 0 1.93 1.93.5.5 0 1 1-.56.83 8.04 8.04 0 0 1-2.2-2.2.5.5 0 0 1 .13-.7Zm9.99-6.08a2.04 2.04 0 0 0-2.95-.08l-.52.5-.52-.5a2.04 2.04 0 0 0-2.95 2.83l3.1 3.42a.5.5 0 0 0 .74 0l3.1-3.42c.7-.78.7-1.97 0-2.75Z"
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