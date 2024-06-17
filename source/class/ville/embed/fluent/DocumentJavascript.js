/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentJavascript",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2H8.5c.22-.3.38-.63.45-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v7.5l-.23.2a1.5 1.5 0 0 0-.77-.61V4Zm7.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5Zm-8 5a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0V16a.5.5 0 0 0-1 0v.5a1.5 1.5 0 0 0 3 0v-4a.5.5 0 0 0-.5-.5ZM5 13.5a1.5 1.5 0 0 1 3 0 .5.5 0 0 1-1 0 .5.5 0 0 0-1 0v.38c0 .2.1.36.28.45l.9.45c.5.25.82.77.82 1.34v.38a1.5 1.5 0 0 1-3 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0v-.38a.5.5 0 0 0-.28-.45l-.9-.45A1.5 1.5 0 0 1 5 13.88v-.38Z",
    FILLED : "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v7.59c.32.1.59.33.77.6A2.5 2.5 0 0 1 9 13.5c0 .44-.2.84-.5 1.12.32.42.5.95.5 1.5v.38c0 .56-.19 1.08-.5 1.5h6c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5ZM3.5 12a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0V16a.5.5 0 0 0-1 0v.5a1.5 1.5 0 0 0 3 0v-4a.5.5 0 0 0-.5-.5ZM5 13.5a1.5 1.5 0 0 1 3 0 .5.5 0 0 1-1 0 .5.5 0 0 0-1 0v.38c0 .2.1.36.28.45l.9.45c.5.25.82.77.82 1.34v.38a1.5 1.5 0 0 1-3 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0v-.38a.5.5 0 0 0-.28-.45l-.9-.45A1.5 1.5 0 0 1 5 13.88v-.38Z"
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