/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LightbulbPerson",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2c3.31 0 6 2.6 6 5.8 0 1.68-.75 3.22-2.2 4.6a.6.6 0 0 0-.15.2l-.02.09-.94 3.92a1.84 1.84 0 0 1-1.67 1.38l-.15.01H9.13c-.82 0-1.54-.52-1.78-1.26l-.04-.14-.93-3.91a.6.6 0 0 0-.17-.3A6.32 6.32 0 0 1 4 8.04L4 7.8v-.2A5.91 5.91 0 0 1 10 2ZM7.96 15l.31 1.33.03.1c.1.3.38.52.71.56l.12.01h1.81a.86.86 0 0 0 .75-.53l.03-.1.32-1.37H7.96Zm4.53-1.84a4.98 4.98 0 0 0-4.97 0l.2.84h4.57l.2-.84Zm.26-1c.09-.18.2-.35.36-.5C14.38 10.47 15 9.19 15 7.8A4.9 4.9 0 0 0 10 3a4.92 4.92 0 0 0-4.98 4.41L5 7.63V8c.06 1.3.68 2.52 1.9 3.67.14.14.26.3.35.5a5.97 5.97 0 0 1 5.5 0ZM8.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z",
    FILLED : "m12.83 16-.14.6a1.84 1.84 0 0 1-1.67 1.4H9.13c-.82 0-1.54-.52-1.78-1.26l-.04-.14-.14-.6h5.66Zm.24-1 .2-.79a4.98 4.98 0 0 0-6.53 0l.19.79h6.14ZM10 12c-1.31 0-2.53.42-3.52 1.14l-.1-.45a.6.6 0 0 0-.17-.3A6.32 6.32 0 0 1 4 8.04L4 7.8v-.2A5.91 5.91 0 0 1 10 2c3.31 0 6 2.6 6 5.8 0 1.68-.75 3.22-2.2 4.6a.6.6 0 0 0-.15.2l-.02.09-.11.45A5.97 5.97 0 0 0 10 12ZM8.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
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