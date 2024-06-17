/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Document100",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2h-.76a3 3 0 0 0 .59-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v7.17a3 3 0 0 0-1 .6V4Zm7.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5ZM6 12a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0v-2a2 2 0 0 0-2-2Zm-1 2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Zm-2-1.4c0-.2-.1-.35-.2-.44a.64.64 0 0 0-.3-.14c-.13-.03-.5-.03-.67.32-.2.41-.54.93-1.07 1.22a.5.5 0 1 0 .48.88c.3-.17.55-.37.76-.6v3.66a.5.5 0 0 0 1 0v-4.9ZM9 14a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2Zm2-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1Z",
    FILLED : "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v8.26a2.99 2.99 0 0 1 4.5.58A3 3 0 0 1 14 14v2c0 .77-.29 1.47-.76 2h1.26c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Zm-8 6.1c0-.2-.1-.35-.2-.44a.64.64 0 0 0-.3-.14c-.13-.03-.5-.03-.67.32-.2.41-.54.93-1.07 1.22a.5.5 0 1 0 .48.88c.3-.17.55-.37.76-.6v3.66a.5.5 0 0 0 1 0v-4.9ZM4 14a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2Zm2-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1Zm5-1a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0v-2a2 2 0 0 0-2-2Zm-1 2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Z"
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