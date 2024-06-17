/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailAlert",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.5 4a3 3 0 0 1 6 0v2l1.32 1.12a.5.5 0 0 1-.33.88H10.5a.5.5 0 0 1-.32-.88L11.5 6V4Zm3 6a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1Zm-10-5h6V4h-6A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5V9h-1v5.5c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5V7.96l6.75 3.97.08.04c.14.05.3.04.42-.04l2.62-1.54a2.5 2.5 0 0 1-.62-.8L10 10.93 3 6.8v-.3C3 5.67 3.67 5 4.5 5Z",
    FILLED : "M11.5 4a3 3 0 0 1 6 0v2l1.32 1.12a.5.5 0 0 1-.33.88H10.5a.5.5 0 0 1-.32-.88L11.5 6V4Zm3 6a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1Zm-4-4.46-.97.82A1.5 1.5 0 0 0 10.5 9h1.52l.12.33.11.27L10 10.92l-7.98-4.7A2.5 2.5 0 0 1 4.5 4h6v1.54Zm-.25 6.4 2.62-1.55a2.49 2.49 0 0 0 3.99-1.06l.11-.33H18v5.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.37l7.75 4.56c.15.1.35.1.5 0Z"
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