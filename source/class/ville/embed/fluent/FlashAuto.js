/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FlashAuto",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.2 2.77C6.31 2.31 6.73 2 7.2 2h5.25c.73 0 1.24.71 1 1.4L12.22 7h2.56c.85 0 1.3.92.93 1.6a1.5 1.5 0 0 0-.88-.57.07.07 0 0 0-.02-.02L14.77 8H11.5a.5.5 0 0 1-.47-.67l1.5-4.25a.06.06 0 0 0-.07-.08H7.21a.06.06 0 0 0-.06.05L4.9 10.92c0 .04.02.08.06.08h1.91a.5.5 0 0 1 .49.62l-1.33 5.3v.04l.03.03.04.01h.01l.03-.02 6.4-6.55-.86 2.32-4.82 4.92c-.76.79-2.06.06-1.8-1L6.23 12H4.96c-.7 0-1.21-.68-1.02-1.36L6.2 2.77ZM14.5 9c.2 0 .4.13.47.32l3 8a.5.5 0 1 1-.94.36l-1-2.68h-3.06l-1 2.68a.5.5 0 0 1-.94-.36l3-8A.5.5 0 0 1 14.5 9Zm1.15 5-1.15-3.08L13.35 14h2.3Z",
    FILLED : "M7.21 2c-.47 0-.89.31-1.02.77l-2.25 7.87c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l4.82-4.93 1.42-3.78a1.5 1.5 0 0 1 2.6-.37c.38-.68-.08-1.6-.93-1.6H12.2l1.26-3.6c.23-.69-.28-1.4-1-1.4H7.2Zm7.29 7c.2 0 .4.13.47.32l3 8a.5.5 0 1 1-.94.36l-1-2.68h-3.06l-1 2.68a.5.5 0 0 1-.94-.36l3-8A.5.5 0 0 1 14.5 9Zm1.15 5-1.15-3.08L13.35 14h2.3Z"
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