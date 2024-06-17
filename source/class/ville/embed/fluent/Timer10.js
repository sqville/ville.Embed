/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Timer10",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm7.45 1.43c.2-.2.51-.2.7 0l1.42 1.41a.5.5 0 1 1-.7.71l-1.42-1.41a.5.5 0 0 1 0-.71ZM9 6.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4ZM9.5 18c.51 0 1.02-.06 1.5-.16V16.8a6.01 6.01 0 1 1 4.44-6.65c.31-.1.65-.15.99-.16a7 7 0 1 0-6.93 8Zm4.5-4.5a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3Zm2.5-1.5c-.83 0-1.5.67-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3c0-.83-.67-1.5-1.5-1.5Zm-3.5-.5a.5.5 0 0 0-.66-.47l-1.5.5a.5.5 0 1 0 .32.94l.84-.28v6.31a.5.5 0 0 0 1 0v-7Z",
    FILLED : "M7.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.66 1.93a.5.5 0 1 0-.71.7l1.41 1.42a.5.5 0 1 0 .71-.7l-1.41-1.42ZM16.43 10c-.98.02-1.86.44-2.48 1.1a1.5 1.5 0 0 0-1.92-1.02l-1.5.5A1.5 1.5 0 0 0 11 13.5v4.34A7.03 7.03 0 0 1 2.5 11a7 7 0 0 1 13.93-1ZM9 10.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-1 0v4Zm5 3a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3Zm2.5-1.5c-.83 0-1.5.67-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3c0-.83-.67-1.5-1.5-1.5Zm-3.5-.5a.5.5 0 0 0-.66-.47l-1.5.5a.5.5 0 1 0 .32.94l.84-.28v6.31a.5.5 0 0 0 1 0v-7Z"
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