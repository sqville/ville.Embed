/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookmarkMultiple",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.27 3A2 2 0 0 1 8 2h4.5A3.5 3.5 0 0 1 16 5.5v10a.5.5 0 0 1-.78.42l-.22-.15V5.5A2.5 2.5 0 0 0 12.5 3H6.27ZM6 4a2 2 0 0 0-2 2v11.5a.5.5 0 0 0 .78.42L9 15.1l4.22 2.82a.5.5 0 0 0 .78-.42V6a2 2 0 0 0-2-2H6ZM5 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10.57l-3.72-2.49a.5.5 0 0 0-.56 0L5 16.57V6Z",
    FILLED : "M6.27 3A2 2 0 0 1 8 2h4.5A3.5 3.5 0 0 1 16 5.5v10a.5.5 0 0 1-.78.42l-.22-.15V5.5A2.5 2.5 0 0 0 12.5 3H6.27ZM6 4a2 2 0 0 0-2 2v11.5a.5.5 0 0 0 .78.42L9 15.1l4.22 2.82a.5.5 0 0 0 .78-.42V6a2 2 0 0 0-2-2H6Z"
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