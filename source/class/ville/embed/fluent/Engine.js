/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Engine",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8 3a.5.5 0 0 0-1 0v1H6a2 2 0 0 0-2 2v3H3V6.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V10h1v2.88a2 2 0 0 0 .59 1.41L7 16.71a1 1 0 0 0 .7.29h5.5a1 1 0 0 0 .89-.55L14.8 15H16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1.2l-.71-1.45a1 1 0 0 0-.9-.55H11V3a.5.5 0 0 0-1 0v1H8V3ZM6 5h7.2l.71 1.45a1 1 0 0 0 .9.55H16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1.2a1 1 0 0 0-.89.55L13.2 16H7.71l-2.42-2.41a1 1 0 0 1-.29-.71V6a1 1 0 0 1 1-1Zm1.5 2c.28 0 .5.22.5.5V10a1 1 0 0 0 1 1h1V7.5a.5.5 0 0 1 1 0V11h3.5a.5.5 0 0 1 0 1H9a2 2 0 0 1-2-2V7.5c0-.28.22-.5.5-.5Z",
    FILLED : "M7.5 2.5c.28 0 .5.22.5.5v1h2V3a.5.5 0 0 1 1 0v1h2.2a1 1 0 0 1 .89.55L14.8 6H16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1.2l-.71 1.45a1 1 0 0 1-.9.55H7.71a1 1 0 0 1-.71-.3l-2.41-2.4A2 2 0 0 1 4 12.87V10H3v2.5a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 1 0V9h1V6c0-1.1.9-2 2-2h1V3c0-.28.22-.5.5-.5Zm0 4.5a.5.5 0 0 0-.5.5V10c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 0-1H11V7.5a.5.5 0 0 0-1 0V11H9a1 1 0 0 1-1-1V7.5a.5.5 0 0 0-.5-.5Z"
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