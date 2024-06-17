/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AlertUrgent",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.26 2.08a.5.5 0 1 0-.52.85C15 4.31 16.86 6.34 17 10.02a.5.5 0 0 0 1-.04c-.16-4.1-2.28-6.4-4.74-7.9ZM12.1 4.73a.5.5 0 0 1 .69-.14 6.17 6.17 0 0 1 2.91 4.91.5.5 0 0 1-1 0c0-.13 0-.26-.02-.39a5.17 5.17 0 0 0-2.45-3.69.5.5 0 0 1-.13-.7Zm-7.01.7a5.16 5.16 0 0 0-2.61 6.82L3.69 15l.09 2.32c.02.53.57.87 1.05.65l9.73-4.33c.49-.21.6-.85.22-1.22L13.1 10.8 11.9 8.05a5.16 5.16 0 0 0-6.81-2.61Zm-1.7 6.41a4.16 4.16 0 0 1 7.6-3.38l1.3 2.92 1.54 1.5-9.06 4.03-.08-2.14-1.3-2.93Zm7.3 6.04c-.68.3-1.46.05-1.85-.54l2.68-1.2c.19.7-.16 1.44-.83 1.74Z",
    FILLED : "M2.47 12.25a5.16 5.16 0 0 1 9.42-4.2l1.22 2.75 1.67 1.62c.38.37.27 1-.22 1.22l-9.73 4.33a.75.75 0 0 1-1.05-.65L3.68 15l-1.21-2.75Zm6.36 5.09a1.49 1.49 0 0 0 2.68-1.2l-2.68 1.2Zm3.26-12.61a.5.5 0 0 1 .69-.14 6.17 6.17 0 0 1 2.91 4.91.5.5 0 1 1-1 0c0-.13 0-.26-.02-.39a5.17 5.17 0 0 0-2.45-3.69.5.5 0 0 1-.13-.7Zm.49-2.49a.5.5 0 0 1 .68-.16c2.46 1.5 4.58 3.8 4.74 7.9a.5.5 0 0 1-1 .04c-.14-3.68-2-5.7-4.26-7.09a.5.5 0 0 1-.16-.69Z"
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