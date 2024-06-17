/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SignOut",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 11.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM11 3.5a.5.5 0 0 0-.58-.5l-7 1.08a.5.5 0 0 0-.42.49v10.86c0 .25.18.46.42.5l7 1.07a.5.5 0 0 0 .58-.5V10h5.17l-1 .87a.5.5 0 0 0 .66.76l2-1.75a.5.5 0 0 0 0-.76l-2-1.75a.5.5 0 1 0-.65.76l1 .87H11V3.5Zm-1 .58v11.84L4 15V5l6-.92ZM12.5 16H12v-5h1v4.5a.5.5 0 0 1-.5.5ZM12 8V4h.5c.28 0 .5.22.5.5V8h-1Z",
    FILLED : "M11 3.5a.5.5 0 0 0-.58-.5l-7 1.08a.5.5 0 0 0-.42.49v10.86c0 .25.18.46.42.5l7 1.07a.5.5 0 0 0 .58-.5V10h5.17l-1 .87a.5.5 0 0 0 .66.76l2-1.75a.5.5 0 0 0 0-.76l-2-1.75a.5.5 0 1 0-.65.76l1 .87H11V3.5Zm-2.5 7.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm4 4.75H12v-5h1v4.5a.5.5 0 0 1-.5.5ZM12 8V4h.5c.28 0 .5.22.5.5V8h-1Z"
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