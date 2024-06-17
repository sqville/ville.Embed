/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ContactCardRibbon",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-4 3.2c0-.53.42-.95.95-.95h3.1c.53 0 .95.42.95.95 0 .85-.58 1.58-1.4 1.79l-.06.01a4.3 4.3 0 0 1-2.08 0l-.06-.01c-.82-.2-1.4-.94-1.4-1.8ZM11.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 3a.5.5 0 0 0 0 1h.63c.09-.35.23-.7.4-1H11.5Zm-7.75 4h8.79c.13.23.28.45.46.65V16H3.75C2.78 16 2 15.22 2 14.25v-8.5C2 4.78 2.78 4 3.75 4h12.5c.97 0 1.75.78 1.75 1.75v3.79c-.3-.18-.65-.32-1-.41V5.75a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75v8.5c0 .41.34.75.75.75ZM19 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1 3.46a3.98 3.98 0 0 1-4 0v2.29c0 .2.21.31.38.22L16 18l1.62.97c.17.1.38-.03.38-.22v-2.29Z",
    FILLED : "M3.5 4C2.67 4 2 4.67 2 5.5v9c0 .83.67 1.5 1.5 1.5H13v-.35a3.98 3.98 0 0 1-.87-3.65h-.63a.5.5 0 0 1 0-1h1.04A4 4 0 0 1 18 9.54V5.5c0-.83-.67-1.5-1.5-1.5h-13Zm3 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1.55.75c.53 0 .95.42.95.95 0 .85-.58 1.58-1.4 1.79l-.06.01a4.3 4.3 0 0 1-2.08 0l-.06-.01c-.82-.2-1.4-.94-1.4-1.8 0-.52.42-.94.95-.94h3.1ZM11 8.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm8 4.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1 3.46a3.98 3.98 0 0 1-4 0v2.29c0 .2.21.31.38.22L16 18l1.62.97c.17.1.38-.03.38-.22v-2.29Z"
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