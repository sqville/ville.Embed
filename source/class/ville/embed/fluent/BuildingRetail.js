/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingRetail",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 7a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-9Zm.5 3V8h8v2H6Zm5.5 2a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-3Zm.5 2v-1h2v1h-2ZM2 4.5C2 3.67 2.67 3 3.5 3h13a1.5 1.5 0 0 1 .5 2.91V16.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V5.91c-.58-.2-1-.76-1-1.41ZM3.5 4a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM4 6v10h1v-3.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V16h6V6H4Zm2 10h3v-3H6v3Z",
    FILLED : "M6 10V8h8v2H6Zm6 4v-1h2v1h-2Zm6-9.5c0 .65-.42 1.2-1 1.41V16.5a.5.5 0 0 1-.5.5H10v-4.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V17H3.5a.5.5 0 0 1-.5-.5V5.91A1.5 1.5 0 0 1 3.5 3h13c.83 0 1.5.67 1.5 1.5Zm-15 0c0 .28.22.5.5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5ZM5.5 7a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-9Zm6 5a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-3ZM6 17h3v-4H6v4Z"
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