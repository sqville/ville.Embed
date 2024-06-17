/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailArrowDoubleBack",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 14.5v-4.1c.36-.18.7-.4 1-.66v4.76a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h4.7c-.08.32-.15.66-.18 1H4.5C3.67 5 3 5.67 3 6.5v.3l7 4.12 1.44-.85c.33.22.68.4 1.04.55l-2.23 1.31a.5.5 0 0 1-.42.04l-.08-.04L3 7.96v6.54c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5ZM14.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-1.15-6.35c.2.2.2.5 0 .7L12.21 5.5l1.14 1.15a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0Zm2.5.7-.64.65H17a1 1 0 0 1 1 1v.5a.5.5 0 0 1-1 0V6h-1.8l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 0 1 .7.7Z",
    FILLED : "M14.5 11c1.33 0 2.55-.47 3.5-1.26v4.76a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.37l7.75 4.56c.15.1.35.1.5 0l2.23-1.31c.63.24 1.3.38 2.02.38Zm-10-7h4.7a5.5 5.5 0 0 0 2.24 6.07l-1.44.85-7.98-4.7A2.5 2.5 0 0 1 4.5 4Zm10 6a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-1.15-6.35c.2.2.2.5 0 .7L12.21 5.5l1.14 1.15a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0Zm2.5.7-.64.65H17a1 1 0 0 1 1 1v.5a.5.5 0 0 1-1 0V6h-1.8l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 0 1 .7.7Z"
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