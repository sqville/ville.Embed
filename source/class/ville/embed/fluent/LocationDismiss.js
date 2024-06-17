/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LocationDismiss",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.95 13.96a7 7 0 1 0-9.9 0l1.52 1.5 2.04 1.98.14.12a2 2 0 0 0 2.64-.12l2.43-2.37 1.13-1.12Zm-9.2-9.2a6 6 0 0 1 8.67 8.3l-.18.19-1.32 1.3-2.23 2.17-.09.08a1 1 0 0 1-1.2 0l-.1-.08-2.97-2.9-.58-.57-.17-.18a6 6 0 0 1 .17-8.31Zm1.4 1.39c.2-.2.5-.2.7 0L10 8.29l2.15-2.14a.5.5 0 0 1 .7.7L10.71 9l2.14 2.15a.5.5 0 0 1-.7.7L10 9.71l-2.15 2.14a.5.5 0 0 1-.7-.7L9.29 9 7.15 6.85a.5.5 0 0 1 0-.7Z",
    FILLED : "M14.95 4.05a7 7 0 0 1 0 9.9l-1.13 1.12-2.43 2.37a2 2 0 0 1-2.64.12l-.14-.12-2.04-1.99-1.52-1.5a7 7 0 0 1 9.9-9.9Zm-7.8 2.1a.5.5 0 0 0 0 .7L9.29 9l-2.14 2.15a.5.5 0 0 0 .7.7L10 9.71l2.15 2.14a.5.5 0 0 0 .7-.7L10.71 9l2.14-2.15a.5.5 0 0 0-.7-.7L10 8.29 7.85 6.15a.5.5 0 0 0-.7 0Z"
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