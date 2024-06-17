/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FontIncrease",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.85 4.85a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1-.7.7L15.5 3.21l-1.65 1.64ZM10 4a.5.5 0 0 0-.46.31l-4.5 11a.5.5 0 1 0 .92.38l1.54-3.76V12h5v-.07l1.54 3.76a.5.5 0 1 0 .92-.38l-4.5-11A.5.5 0 0 0 10 4Zm0 1.82L12.12 11H7.88L10 5.82Z",
    FILLED : "M14.24 4.82a.75.75 0 0 1-.98-1.14l1.75-1.5c.28-.24.7-.24.98 0l1.75 1.5a.75.75 0 1 1-.98 1.14L15.5 3.74l-1.26 1.08ZM10 3.75c-.3 0-.58.18-.7.47l-4.5 11a.75.75 0 0 0 1.4.56l1.44-3.53h4.72l1.45 3.53a.75.75 0 1 0 1.38-.56l-4.5-11a.75.75 0 0 0-.69-.47Zm0 2.73 1.75 4.27h-3.5L10 6.48Z"
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