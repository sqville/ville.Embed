/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AppsShield",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15.5 17H8.42c.16-.3.3-.64.39-1h.69v-5.5H6.98a4.76 4.76 0 0 1-1.35-1H9.5v-5a.5.5 0 0 0-.33-.47l-.08-.02L9 4H4.5a.5.5 0 0 0-.5.41v4.67c-.22.08-.43.2-.6.39a5.7 5.7 0 0 1-.4.38V4.5c0-.78.6-1.42 1.36-1.5H9c.78 0 1.42.6 1.5 1.36v.39l2.19-2.26a1.5 1.5 0 0 1 2-.14l.12.1 2.76 2.72c.55.55.6 1.42.11 2.01l-.1.12-2.31 2.2h.23c.78 0 1.42.6 1.5 1.36v4.64c0 .78-.6 1.42-1.36 1.5h-.14Zm0-6.5h-5V16h5a.5.5 0 0 0 .5-.41V11a.5.5 0 0 0-.41-.5h-.09Zm-5-2.8v1.8h1.79L10.5 7.7Zm3.62-4.53a.5.5 0 0 0-.64-.05l-.07.06-2.62 2.71a.5.5 0 0 0-.05.63l.06.07 2.61 2.62c.17.17.43.2.62.07l.08-.06 2.76-2.63a.5.5 0 0 0 .05-.64l-.05-.07-2.75-2.7Zm-9.24 6.99c.5.53 1.48 1.38 2.68 1.55a.5.5 0 0 1 .44.48v2.33c0 3.12-2.78 4.25-3.39 4.46a.34.34 0 0 1-.22 0c-.6-.2-3.39-1.34-3.39-4.46v-2.33c0-.24.2-.44.44-.48a4.95 4.95 0 0 0 2.68-1.55c.2-.21.56-.21.76 0Z",
    FILLED : "M15.5 17H8.42c.16-.3.3-.64.39-1h.69v-5.5H6.98a4.76 4.76 0 0 1-1.35-1H9.5v-5a.5.5 0 0 0-.33-.47l-.08-.02L9 4H4.5a.5.5 0 0 0-.5.41v4.67c-.22.08-.43.2-.6.39a5.7 5.7 0 0 1-.4.38V4.5c0-.78.6-1.42 1.36-1.5H9c.78 0 1.42.6 1.5 1.36v.39l2.19-2.26a1.5 1.5 0 0 1 2-.14l.12.1 2.76 2.72c.55.55.6 1.42.11 2.01l-.1.12-2.31 2.2h.23c.78 0 1.42.6 1.5 1.36v4.64c0 .78-.6 1.42-1.36 1.5h-.14Zm0-6.5h-5V16h5a.5.5 0 0 0 .5-.41V11a.5.5 0 0 0-.41-.5h-.09Zm-5-2.8v1.8h1.79L10.5 7.7Zm-5.62 2.46c.5.53 1.48 1.38 2.68 1.55a.5.5 0 0 1 .44.48v2.33c0 3.12-2.78 4.25-3.39 4.46a.34.34 0 0 1-.22 0c-.6-.2-3.39-1.34-3.39-4.46v-2.33c0-.24.2-.44.44-.48a4.95 4.95 0 0 0 2.68-1.55c.2-.21.56-.21.76 0Z"
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