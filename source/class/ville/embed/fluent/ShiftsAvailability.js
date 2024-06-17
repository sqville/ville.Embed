/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShiftsAvailability",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.92 6.08a5 5 0 1 0-5.84 5.84c-.05.32-.08.66-.08 1A6 6 0 1 1 12.92 6c-.34 0-.68.03-1 .08Zm-.57 4.57a.5.5 0 0 0-.7.7L12.29 13l-1.64 1.65a.5.5 0 0 0 .7.7L13 13.71l1.65 1.64a.5.5 0 0 0 .7-.7L13.71 13l1.64-1.65a.5.5 0 0 0-.7-.7L13 12.29l-1.65-1.64ZM13 19a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-1a5 5 0 1 1 0-10 5 5 0 0 1 0 10ZM9.35 5.35a.5.5 0 1 0-.7-.7L6 7.29 4.85 6.15a.5.5 0 1 0-.7.7l1.5 1.5c.2.2.5.2.7 0l3-3Z",
    FILLED : "M6 12.92A7 7 0 0 1 12.92 6 6 6 0 1 0 6 12.92Zm3.35-8.27c.2.2.2.5 0 .7l-3 3a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 1 1 .7-.7L6 7.29l2.65-2.64c.2-.2.5-.2.7 0ZM13 19a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-1.65-8.35L13 12.29l1.65-1.64a.5.5 0 0 1 .7.7L13.71 13l1.64 1.65a.5.5 0 0 1-.7.7L13 13.71l-1.65 1.64a.5.5 0 0 1-.7-.7L12.29 13l-1.64-1.65a.5.5 0 0 1 .7-.7Z"
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