/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FontSpaceTrackingOut",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.46 11.68a.5.5 0 0 1-.93 0l-3.51-9.02a.5.5 0 1 1 .93-.36l3.04 7.82 3.04-7.82a.5.5 0 0 1 .94.36l-3.51 9.02ZM6 1.98c.21 0 .4.13.47.32l2.32 5.96a.5.5 0 0 1 .04.11l1.15 2.95a.5.5 0 0 1-.93.36L8 9H4l-1.04 2.68a.5.5 0 0 1-.93-.36l1.17-3V8.3l2.34-6A.5.5 0 0 1 6 1.98ZM4.4 8H7.6l-1.6-4.14L4.4 8Zm10.39 5.18a.5.5 0 0 1 .7-.06l2.33 2a.5.5 0 0 1 0 .76l-2.33 2a.5.5 0 0 1-.65-.76l1.3-1.12H3.85l1.31 1.12a.5.5 0 1 1-.65.76l-2.33-2a.5.5 0 0 1 0-.76l2.33-2a.5.5 0 1 1 .65.76L3.85 15h12.3l-1.3-1.12a.5.5 0 0 1-.06-.7Z",
    FILLED : "M6 2c.31 0 .59.2.7.48l3.25 8.5a.75.75 0 0 1-1.4.53L7.78 9.5H4.22l-.77 2.01a.75.75 0 0 1-1.4-.53l3.25-8.5A.75.75 0 0 1 6 2ZM4.8 8h2.4L6 4.85 4.8 8Zm9.88 5.26a.75.75 0 0 1 1.06-.07l2 1.74a.75.75 0 0 1 0 1.13l-2 1.75a.75.75 0 1 1-.99-1.12l.5-.44H4.75l.5.44a.75.75 0 1 1-1 1.12l-2-1.74a.75.75 0 0 1 0-1.13l2-1.75a.75.75 0 0 1 1 1.12l-.5.44h10.5l-.5-.44a.75.75 0 0 1-.07-1.05Zm.02-1.74a.75.75 0 0 1-1.4 0l-3.25-8.5a.75.75 0 1 1 1.4-.53L14 9.15l2.55-6.66a.75.75 0 1 1 1.4.53l-3.25 8.5Z"
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