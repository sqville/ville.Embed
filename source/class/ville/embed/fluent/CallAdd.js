/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CallAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3.55 2.44a4.1 4.1 0 0 1 2.99-.32c.5.12.94.45 1.2.9l.97 1.7a2.5 2.5 0 0 1-.67 3.24l-.6.45c-.28.22-.4.52-.34.77.18.82.59 1.57 1.15 2.13.17.16.47.22.8.1l.66-.26a2.5 2.5 0 0 1 3.07 1.11l.95 1.7c.27.48.31 1.04.12 1.54a3.9 3.9 0 0 1-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 0 1-2.03-7.06 2.87 2.87 0 0 1 1.51-2.5Zm.49.87c-.59.33-.98.89-1 1.66-.04 1.61.33 3.85 1.9 6.53a15.3 15.3 0 0 0 4.62 5.15 1.9 1.9 0 0 0 1.91.16 2.91 2.91 0 0 0 1.45-1.65.84.84 0 0 0-.06-.7l-.95-1.7a1.5 1.5 0 0 0-1.85-.68l-.66.26c-.58.22-1.33.2-1.85-.32A5.32 5.32 0 0 1 6.13 9.4c-.17-.72.2-1.4.71-1.78l.6-.46c.6-.45.78-1.29.4-1.94l-.97-1.7a.93.93 0 0 0-.58-.43 3.1 3.1 0 0 0-2.25.22ZM15 2.5a.5.5 0 0 0-1 0V5h-2.5a.5.5 0 0 0 0 1H14v2.5a.5.5 0 0 0 1 0V6h2.5a.5.5 0 0 0 0-1H15V2.5Z",
    FILLED : "M3.55 2.44a4.1 4.1 0 0 1 2.99-.32c.5.12.94.45 1.2.9l.9 1.57a2.5 2.5 0 0 1-.84 3.36l-.79.5c-.32.2-.44.52-.37.77.27.9.86 1.9 1.52 2.58.19.2.54.25.9.05l.43-.26a2.5 2.5 0 0 1 3.44.94l.8 1.44c.27.47.31 1.03.12 1.53a3.9 3.9 0 0 1-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 0 1-2.03-7.06 2.87 2.87 0 0 1 1.51-2.5ZM15 2.5a.5.5 0 0 0-1 0V5h-2.5a.5.5 0 0 0 0 1H14v2.5a.5.5 0 0 0 1 0V6h2.5a.5.5 0 0 0 0-1H15V2.5Z"
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