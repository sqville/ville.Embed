/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FontDecrease",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.15 2.15c.2-.2.5-.2.7 0l1.65 1.64 1.65-1.64a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 0-.7ZM10 4c.2 0 .39.12.46.31l4.5 11a.5.5 0 1 1-.92.38l-1.54-3.76V12h-5v-.07L5.96 15.7a.5.5 0 1 1-.92-.38l4.5-11A.5.5 0 0 1 10 4Zm-2.12 7h4.24L10 5.82 7.88 11Z",
    FILLED : "M14.24 2.18a.75.75 0 0 0-.98 1.14l1.75 1.5c.28.24.7.24.98 0l1.75-1.5a.75.75 0 1 0-.98-1.14L15.5 3.26l-1.26-1.08ZM10 4c-.3 0-.58.19-.7.47l-4.25 10.5a.75.75 0 1 0 1.4.56L7.87 12h4.26l1.42 3.53a.75.75 0 1 0 1.4-.56L10.7 4.47A.75.75 0 0 0 10 4Zm0 2.75 1.52 3.75H8.48L10 6.75Z"
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