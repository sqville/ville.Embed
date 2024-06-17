/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BorderTopBottomThick",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 4.5a1.5 1.5 0 0 0-1.43 1.04.75.75 0 0 1-1.38-.58A3 3 0 0 1 6 3h8a3 3 0 0 1 2.81 1.96.75.75 0 0 1-1.38.58A1.5 1.5 0 0 0 14 4.5H6ZM3.75 12a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .41-.34.75-.75.75ZM14 15.5H6a1.5 1.5 0 0 1-1.43-1.04.75.75 0 0 0-1.38.58A3 3 0 0 0 6 17h8a3 3 0 0 0 2.81-1.96.75.75 0 0 0-1.38-.58l-.03.08a1.5 1.5 0 0 1-1.4.96Zm1.5-4.25a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5Z",
    FILLED : "M5.12 5.52A1 1 0 0 1 6 5h8a1 1 0 0 1 .88.52 1 1 0 0 0 1.84-.33 1 1 0 0 0-.22-.83A3 3 0 0 0 14 3H6a3 3 0 0 0-2.5 1.35 1 1 0 1 0 1.62 1.17Zm0 8.96A1 1 0 0 0 6 15h8a1 1 0 0 0 .88-.52 1 1 0 0 1 1.84.33 1 1 0 0 1-.22.83A3 3 0 0 1 14 17H6a3 3 0 0 1-2.5-1.35 1 1 0 1 1 1.62-1.17ZM4 12a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1Zm11-1a1 1 0 0 0 2 0V9a1 1 0 1 0-2 0v2Z"
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