/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextBulletListLtr90",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.5 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1 3c.28 0 .5.22.5.5v11a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5Zm-5 0c.28 0 .5.22.5.5v11a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5ZM6 6.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0v-11ZM5.5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
    FILLED : "M14 3.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0ZM15.25 7c.41 0 .75.34.75.75v9.5a.75.75 0 0 1-1.5 0v-9.5c0-.41.34-.75.75-.75ZM11 7.75a.75.75 0 0 0-1.5 0v9.5a.75.75 0 0 0 1.5 0v-9.5Zm-5 0a.75.75 0 0 0-1.5 0v9.5a.75.75 0 0 0 1.5 0v-9.5Zm4.25-3.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM4 3.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Z"
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