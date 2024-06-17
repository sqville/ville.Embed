/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentMention",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 2a2 2 0 0 0-2 2v5.2c.32-.08.66-.15 1-.18V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1h-4c-.43.44-1 .74-1.65.82l.04.18H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM6.67 17.71a.54.54 0 0 1 .43.99l-.06.03-.19.06A4.5 4.5 0 1 1 10 14.5c0 1.3-.89 2.34-1.98 2.34-.52 0-.92-.2-1.18-.58a1.8 1.8 0 0 1-1.38.58A1.82 1.82 0 0 1 4 16.07a2.66 2.66 0 0 1-.48-1.57c0-.6.17-1.15.48-1.57a1.84 1.84 0 0 1 2.47-.5.54.54 0 0 1 1 .2l.01.07v1.8c0 .9.2 1.26.54 1.26.45 0 .9-.52.9-1.26a3.42 3.42 0 1 0-2.59 3.32l.2-.06.15-.05ZM5 13.44c-.25.22-.4.6-.4 1.06 0 .46.15.84.4 1.06.14.13.31.2.5.2.52 0 .9-.54.9-1.26s-.38-1.26-.9-1.26a.74.74 0 0 0-.5.2Z",
    FILLED : "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H8.39l-.04-.18C9.95 17.63 11 16.1 11 14.5a5.5 5.5 0 0 0-7-5.3V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM10 14.5a4.5 4.5 0 1 0-3.14 4.29l.19-.06.06-.03a.54.54 0 0 0-.43-.99l-.14.05-.2.06a3.43 3.43 0 1 1 2.58-3.32c0 .74-.45 1.26-.9 1.26-.34 0-.54-.36-.54-1.26v-1.87a.54.54 0 0 0-1-.2 1.8 1.8 0 0 0-.98-.27c-1.22 0-1.98 1.1-1.98 2.34 0 1.25.76 2.34 1.98 2.34.55 0 1-.22 1.34-.58.26.37.66.58 1.18.58 1.09 0 1.98-1.04 1.98-2.34Zm-5.4 0c0-.72.38-1.26.9-1.26s.9.54.9 1.26-.38 1.26-.9 1.26-.9-.54-.9-1.26Z"
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