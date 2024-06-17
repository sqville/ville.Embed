/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingRetailMoney",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 4.5C2 3.67 2.67 3 3.5 3h13a1.5 1.5 0 0 1 .5 2.91V12h-1V6H4v10h1v-3.5c0-.28.22-.5.5-.5h4c.2 0 .38.12.46.3A2 2 0 0 0 9 14v-1H6v3h3v1H3.5a.5.5 0 0 1-.5-.5V5.91c-.58-.2-1-.76-1-1.41ZM3.5 4a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm2 3a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-9Zm.5 3V8h8v2H6Zm13 4.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5ZM17.5 18c0-.28.22-.5.5-.5v-1c-.83 0-1.5.67-1.5 1.5h1Zm.5-3.5a.5.5 0 0 1-.5-.5h-1c0 .83.67 1.5 1.5 1.5v-1Zm-6.5-.5a.5.5 0 0 1-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1Zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
    FILLED : "M6 10V8h8v2H6Zm11-4.09A1.5 1.5 0 0 0 16.5 3h-13A1.5 1.5 0 0 0 3 5.91V16.5c0 .28.22.5.5.5H5v-4.5c0-.28.22-.5.5-.5h4c.2 0 .38.12.46.3.3-.2.66-.3 1.04-.3h6V5.91ZM3.5 4h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1ZM5 7.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-3ZM9 13v4H6v-4h3Zm8.5 0c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6Zm0 5c0-.28.22-.5.5-.5v-1c-.83 0-1.5.67-1.5 1.5h1Zm.5-3.5a.5.5 0 0 1-.5-.5h-1c0 .83.67 1.5 1.5 1.5v-1Zm-6.5-.5a.5.5 0 0 1-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1Zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
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