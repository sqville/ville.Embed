/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PaddingDown",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m14.35 11.35-4.5 4.5a.5.5 0 0 1-.7 0l-4.5-4.5a.5.5 0 0 1 .7-.7L9 14.29V4.5a.5.5 0 0 1 1 0v9.8l3.65-3.65a.5.5 0 0 1 .7.7ZM3.5 3a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1h-12Zm0 15a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1Zm3 0a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Zm4 0a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Zm4 0a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1Z",
    FILLED : "M3.75 2.75c0 .41.34.75.75.75H15A.75.75 0 0 0 15 2H4.5a.75.75 0 0 0-.75.75Zm0 14.5c0 .41.34.75.75.75h1.31a.75.75 0 0 0 0-1.5H4.5a.75.75 0 0 0-.75.75Zm3.94 0c0 .41.33.75.75.75h2.62a.75.75 0 0 0 0-1.5H8.44a.75.75 0 0 0-.75.75Zm5.25 0c0 .41.33.75.75.75H15a.75.75 0 0 0 0-1.5h-1.31a.75.75 0 0 0-.75.75Zm-2.66-1.97c-.3.3-.77.3-1.06 0l-4.25-4.25a.75.75 0 1 1 1.06-1.06L9 12.94V5.75a.75.75 0 0 1 1.5 0v7.19l2.97-2.97a.75.75 0 1 1 1.06 1.06l-4.25 4.25Z"
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